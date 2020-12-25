export default {
  toggle: (event) => {
    const attr = event.getAttribute('data-target')
    const $target = document.querySelector(`#${attr}`)
    $target.classList.toggle('is-open')
  },
}
