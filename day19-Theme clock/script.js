const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.dateEl')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Sunday"]
const mounths = ["Jan", 'Feb', "Mar", "Apr", "may", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
    // document.body.parentNode.classList.toggle('dark')
    const html = document.querySelector('html')
   if(html.classList.contains('dark')){
    html.classList.remove('dark')
    e.target.innerHTML='Dark mode'
   }else{
    html.classList.add('dark')
    e.target.innerHTML='Light mode'
   }
  

})