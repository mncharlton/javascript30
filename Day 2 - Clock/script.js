setInterval(function(){
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

  const hoursHand = document.querySelector('.hours')
  const minutesHand = document.querySelector('.minutes')
  const secondsHand = document.querySelector('.seconds')

  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

  console.log(`${hours}:${minutes}:${seconds}`)
  console.log(secondsDegrees)
}, 1000);
