const toggle = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')


const days = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]
const months = ['Jun', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
    let html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add('dark')
        e.target.innerHTML = "Light mode"
    }
})

function getDate() {
    const time = new Date()
    const hours = time.getHours()
    const hoursForWatch = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const ampm=hoursForWatch>=12? "AM":"PM"

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForWatch,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML = `${hoursForWatch}: ${minutes<10? `0${minutes}`:minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]} ${months[month]} <span class="circle">${date}</span>`



}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setInterval(getDate,1000)