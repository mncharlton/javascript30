document.addEventListener('keydown', event => {
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  if (sound !== null) {
    sound.currentTime = 0;
    sound.play();
  }
})
