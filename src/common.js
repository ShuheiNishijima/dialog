(() => {
  'use strict'
  document.addEventListener('DOMContentLoaded', () => {
    const isOpen = event => {
      const attr = event.getAttribute('data-target');
      const $target = document.querySelector(`#${attr}`);
      $target.classList.toggle('is-open');
    }
    const $triggers = document.querySelectorAll('.js-dialog-trigger');
    [...$triggers].map($trigger => {
      $trigger.addEventListener('click', () => {
        isOpen($trigger);
      });
    });
  });
})();
