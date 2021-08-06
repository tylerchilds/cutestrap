import { on } from '../vendor/ion/app.js?CACHEBUST';

const iconClass = 'icon';

const symbols = `
    <svg style="display: none">
      <defs>
        <g id="close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3642 18.95L13.4142 12L20.3642 5.04999L18.9502 3.63599L12.0002 10.586L5.05023 3.63599L3.63623 5.04999L10.5862 12L3.63623 18.95L5.05023 20.364L12.0002 13.414L18.9502 20.364L20.3642 18.95Z" fill="currentColor" />
          </svg>
        </g>
      </defs>
    </svg>
  `;

/* initialize */
const icons = new DOMParser()
  .parseFromString(symbols, "text/xml")
  .querySelectorAll('g[id]');
const ids = [...icons].map(node => node.id);
const selectors = ids.map(id => `icon-${id}`);

initializeIconTags();
initializeIcons();

function initializeIconTags() {
  ids.map(bind);

  function bind(id) {
    const selector = `icon-${id}`;
    on('render', selector, function renderWrapper(event) {
      render(event, id)
    });
  }

  function render(event, id) {
    event.target.innerHTML = `
      <svg viewBox="0 0 24 24" class="${iconClass}">
        <use xlink:href="#${id}"></use>
      </svg>
    `;
  }
}

function initializeIcons() {
  const iconHTML = `
    <style type="text/css">
      .${iconClass} {
        width: 1em;
        height: 1em;
      }

      ${selectors.join(',')} {
        pointer-events: none;
      }
    </style>
    ${symbols}
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", iconHTML);
}

