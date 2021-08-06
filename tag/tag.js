import { innerHTML } from 'https://diffhtml.org/es'
import ion from './vendor/ion/app.js'

function html(slug, callback) {
  ion.on('render', slug, (event) => {
    const { loaded } = get(slug)

    if(!loaded) return;

    const html = callback(event.target)
    if(html) innerHTML(event.target, html)
  })
}

function css(slug, stylesheet) {
  const styles = `
    <style type="text/css" data-tag=${slug}>
      ${stylesheet.replaceAll('&', slug)}
    </style>
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", styles)
}

function get(slug) {
  return ion.get(slug) || {}
}

function set(slug, payload, middleware) {
  ion.set(slug, payload, middleware)
}

function on(slug, eventName, selector, callback) {
  ion.on(eventName, `${slug} ${selector}`, callback)
}

function restore(slug, initialState) {
  ion.restore(slug).then(state => {
    set(slug, { ...initialState, ...state, loaded: true })
  })
  set(slug, initialState)
}

export default function tag(slug, initialState = {}) {
  restore(slug, initialState)

  return {
    css: css.bind(null, slug),
    get: get.bind(null, slug),
    on: on.bind(null, slug),
    html: html.bind(null, slug),
    set: set.bind(null, slug)
  }
}
