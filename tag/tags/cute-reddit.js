import tag from '../tag.js';

const {
  html,
  css,
  set,
  get,
  on
} = tag('cute-reddit');

html(target => {
  const { children = [], after = '' } = query(target);

  const list = children
    .map(({ data }) => `
      <li>
        ${renderPost(data)}
      </li>
    `)
    .join("");

  return `
    <ol>
      ${list}
    </ol>
    <button class="more" data-after="${after}">
      Load More
    </button>
  `;
})

css(`
  & {
    border: 1px solid black;
    border-radius: 2px;
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  & li {
    margin-bottom: 1rem;
  }

  & .more {
    display: block;
    margin: 0 auto;
  }

  & img {
    max-width: 100%;
  }
`);

function query(target) {
  const r = target.getAttribute('r') || 'all';
  const sort = target.getAttribute('sort') || '';
  const after = target.getAttribute('after') || '';

  const query = { r, sort, after };

  const lookup = JSON.stringify(query);

  const { dataset } = target;

  if(lookup !== dataset.lookup) {
    target.dataset.lookup = lookup;
    request(target, query);
  }

  const state = get();
  return state[target.id] || {};
}

async function request(target, query) {
  const response = await askReddit(query);
  set(response, middleware(target.id));
}

async function askReddit({
  r,
  sort = '',
  after = ''
}) {
  return await fetch(`https://www.reddit.com/r/${r}/${sort}/.json?count=25&after=${after}`)
    .then(res => res.json())
    .then(json => json.data);
}

function middleware(id) {
  return function (state, payload = {children: []}) {
    let children = [];
    if(state[id]) {
      children = state[id].children;
    }

    return {
      ...state,
      [id]: {
        ...state[id],
        after: payload.after,
        children: [
          ...children,
          ...payload.children
        ]
      }
    }
  }
}

function renderPost(data) {
  const renderers = {
    'image': (data) => `
      <details>
        <summary>
          <a href="${data.url}">${data.title}</a>
          (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
        </summary>
        <img src="${data.url}" />
      </details>
    `,
    'hosted:video': (data) => `
      <details>
        <summary>
          <a href="${data.url}">${data.title}</a>
          (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
        </summary>
        <video controls muted="false">
          <source src="${data.secure_media.reddit_video.fallback_url}" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </details>
    `,
    'default': (data) => `
      <a href="${data.url}">${data.title}</a>
      (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
    `
  }

  return (renderers[data.post_hint] || renderers['default'])(data);
}

on('click', '.more', function more({ target }) {
  const { after } = target.dataset;
  const element = target.closest('cute-reddit');
  element.setAttribute('after', after);
  set({ touched: true });
});
