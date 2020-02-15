document.addEventListener('keydown', event => {
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
  if (sound !== null) {
    sound.currentTime = 0;
    sound.play();

    key.classList.add('playing')

    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', event => {
      if (event.propertyName === 'transform'){
        event.target.classList.remove('playing')
      }
    }))
  }
})
