/*
  Author: Tyler Childs (network@tychi.me)
  Copyright: Netflix, Inc. (https://netflix.com)
  License: MIT
  Date: 2021-19-03
 */
const renderEvent = new Event('render');

let selectors = []

export function observe(selector) {
  selectors = [...selectors, selector];
  render();
}

export function disregard(selector) {
  const index = selectors.indexOf(selector);
  if(index >= 0) {
    selectors = [
      ...selectors.slice(0, index),
      ...selectors.slice(index + 1)
    ];
  }
}

export default function render(_state) {
  const subscribers = getSubscribers(document);
  dispatchRender(subscribers);
}

function getSubscribers(node) {
  if(selectors.length > 0)
    return [...node.querySelectorAll(selectors.join(', '))];
  else
    return []
}

function dispatchRender(subscribers) {
  subscribers.map(s => s.dispatchEvent(renderEvent));
}

const config = { childList: true, subtree: true };

function mutationObserverCallback(mutationsList, observer) {
  const subscriberCollections = [...mutationsList]
    .map(m =>	getSubscribers(m.target));

  subscriberCollections.forEach(dispatchRender);
};

const observer = new MutationObserver(mutationObserverCallback);

observer.observe(document.body, config);
