import tag from '../tag.js';

const {
  html,
  css,
  set,
  get,
  on
} = tag('cute-share');

const toast = () => set({ toasting: true });
const untoast = () => set({ toasting: false });

html(function renderLiteShare(target) {
  const { toasting } = get() || { toasting: false };

  const share = 'Share Link';
  const copied = 'Link Copied';

  return `
    <button class="copy" ${toasting ? 'disabled' : ''}>
      ${toasting ? copied : share}
    </button>
    <input type="text" id="cute-share-copy-hidden-input" style="position: fixed; bottom: 0; right: 0; display: none;"/>
  `;
});

on('click', '.copy', copy);

async function copy() {
  const input =  document.getElementById('cute-share-copy-hidden-input');
  input.value = window.location.href;

  // get permissions
  const result = await navigator.permissions
    .query({name: "clipboard-write"}).catch(alert);

  if (['granted', 'prompt'].includes(result.state)) {
    input.style.display = 'block';
    input.select();
    document.execCommand("copy");
    input.blur();
    input.style.display = 'none';
  }

  toast()
  setTimeout(untoast, 2500);
}

css(`
  & {
    position: relative;
    z-index: 2;
  }
`)
