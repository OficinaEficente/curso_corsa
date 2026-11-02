'use strict';
const modal = document.querySelector('#enrollment');
const host = document.querySelector('#form-host');
let formLoaded = false;
let opener;
document.querySelectorAll('[data-enroll]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    modal.showModal();
    document.body.classList.add('modal-open');

    if (typeof window.gtag === 'function') window.gtag('event', 'open_enrollment_form', {
      event_label: button.dataset.label, currency: 'BRL',
      content_name: 'Reparo da Caixa de Direção Corsa DHB'
    });
  });
});
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target !== modal) return;
  const r = modal.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) modal.close();
});
modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  opener?.focus();
});
