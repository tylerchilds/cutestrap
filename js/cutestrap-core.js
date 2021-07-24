import { innerHTML } from 'https://diffhtml.org/es';
import ion from './vendor/ion/app.js';
import uuidv4 from './vendor/uuidv4.js';

function render(slug, callback) {
  ion.on('render', slug, (event) => {
    const { id } = event.target;
    if(!id) {
      event.target.id = uuidv4();
    }

    const html = callback(event);
    if(html) innerHTML(event.target, html);
  })
}

function css(slug, stylesheet) {
  console.log(slug, 'sheet {}')
}

function get(slug) {
  return ion.get(slug) || {};
}

function set(slug, payload, middleware) {
  ion.set(slug, payload, middleware)
}

function on(slug, eventName, selector, callback) {
  ion.on(eventName, `${slug} ${selector}`, callback)
}

function load(slug) {
  ion.load(slug);
}

export default function namespace(slug) {
  return {
    css: css.bind(null, slug),
    get: get.bind(null, slug),
    load: load.bind(null, slug),
    on: on.bind(null, slug),
    render: render.bind(null, slug),
    set: set.bind(null, slug)
  }
}
