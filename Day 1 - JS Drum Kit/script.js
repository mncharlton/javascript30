document.addEventListener('keydown', event => {
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
  if (sound !== null) {
    sound.currentTime = 0;
    sound.play();

    key.classList.add('playing')
    setTimeout(function(){
        key.classList.remove('playing');
    }, 200);
  }
})
