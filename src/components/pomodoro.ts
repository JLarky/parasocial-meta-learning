const countdown = document.querySelector('.timer')!
const icon = document.querySelector('.icon')!
const title = document.querySelector('.title')!
// let countdownTime = 5 // 45 minutes
let countdownTime = 45 * 60 // 45 minutes

function updateCountdown() {
  const minutes = Math.floor(countdownTime / 60)
  let seconds: number | string = countdownTime % 60

  seconds = seconds < 10 ? '0' + seconds : seconds

  countdown.textContent = `${minutes}:${seconds}`
  countdownTime--

  if (countdownTime < 0) {
    clearInterval(countdownInterval)
    countdown.textContent = '✓'
    title.textContent = 'Time to take a break!'
    icon.style.display = 'none'
  }
}

const countdownInterval = setInterval(updateCountdown, 1000)

export {}
