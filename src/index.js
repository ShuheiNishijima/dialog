import './assets/styles/style.scss'
import Dialog from './components/dialog.js'

document.addEventListener('DOMContentLoaded', () => {
  const $triggers = document.querySelectorAll('.js-dialog-trigger')
  $triggers.forEach($trigger => {
    $trigger.addEventListener('click', () => {
      Dialog.toggle($trigger)
    })
  })
})
