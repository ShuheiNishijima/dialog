document.addEventListener('DOMContentLoaded', () => {
  const $triggers = document.querySelectorAll('.js-dialog-trigger')

  const isOpen = event => {
    const attr = event.getAttribute('data-target')
    const $target = document.querySelector(`#${attr}`)
    $target.classList.toggle('is-open')
  }

  [...$triggers].forEach($trigger => {
    $trigger.addEventListener('click', () => {
      isOpen($trigger)
    })
  })
})
