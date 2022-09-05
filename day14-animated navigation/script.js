const btn = document.getElementById('toggle')
const nav = document.querySelector('.toggle')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})