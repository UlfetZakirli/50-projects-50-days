const toggles=document.querySelectorAll('.faq-toggle')


toggles.forEach((event)=>{
    event.addEventListener('click',()=>{
        event.parentNode.classList.toggle('active')
    })
})