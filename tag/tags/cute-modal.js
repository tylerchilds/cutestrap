import { on } from '../vendor/ion/app.js?CACHEBUST';
import { innerHTML } from 'https://diffhtml.org/es';
import memoize from '../vendor/ion/on/memoize.js?CACHEBUST';

// fixme: Modal logic needs to be brought in house here
// import Modal from '../models/modal.js?CACHEBUST';

const modal = document.getElementById('modals');

on('render', 'cute-modal', memoize(renderModal, [/*Modal.schema*/]));
on('animationend', 'cute-modal', handleAnimationEnd);

const noop = () => null;
let unbind = noop;

function renderModal({target}) {
  const { content, active } = { content: ''} //Modal.getState();

  innerHTML(target, `<cute-modal-content>${content}</cute-modal-content>`);

  if( active ) {
    document.body.classList.add('overlay');
    target.classList.add('active');
    target.querySelector('cute-modal-content').classList.add('active');
    unbind();
    unbind = on('click', ':not(cute-modal-content)', hideModal);
  } else {
    document.body.classList.remove('overlay');
    target.classList.remove('active');
    target.querySelector('cute-modal-content').classList.remove('active');
  }
}

function hideModal(event) {
  if(event.target.closest('cute-modal-content')) return;

  Modal.hide();
  unbind();
  unbind = noop;
}

function handleAnimationEnd(event) {
  const { active } = Modal.getState();

  if( ! active ) {
    Modal.clear();
  }
}

/* initialize */
initializeModal();

function initializeModal() {
  const modalHTML = `
    <cute-modal></cute-modal>
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", modalHTML);
}
