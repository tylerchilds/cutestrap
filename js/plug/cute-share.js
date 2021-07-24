import { innerHTML } from 'https://diffhtml.org/es';
import ion, { on } from '../vendor/ion/app.js?CACHEBUST';

const set = ion.set.bind(null, 'cute-share');
const get = ion.get.bind(null, 'cute-share');
const render = ion.on.bind(null, 'render', 'cute-share');

const toast = () => set({ toasting: true });
const untoast = () => set({ toasting: false });

initializeStyles();

render(function renderLiteShare({target}) {
  const { toasting } = get() || { toasting: false };

  const share = '<icon-link></icon-link> Share Link to Dashboard';
  const copied = 'Link Copied to Clipboard!';

  innerHTML(target, `
    <button id="cute-share-copy-button" ${toasting ? 'disabled' : ''}>
      ${toasting ? copied : share}
    </button>
    <input type="text" id="cute-share-copy-hidden-input" style="position: fixed; bottom: 0; right: 0; display: none;"/>
  `);
});

on('click', '#cute-share-copy-button', copy);

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

function initializeStyles() {
  const styles = `
    <style type="text/css">
      cute-share {
        position: relative;
        z-index: 2;
      }
    </style>
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", styles);
}
