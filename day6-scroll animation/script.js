function createElement() {
    
    window.addEventListener('scroll', checkBox)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    document.body.appendChild(div)
    div.appendChild(h2)
    div.classList.add('box')
    div.classList.add('show')
    h2.innerText = "Content"
    const boxes = document.querySelectorAll('.box')

    function checkBox() {

        const triggerButton = window.innerHeight / 5 * 4

        boxes.forEach(box => {

            const boxTop = box.getBoundingClientRect().top

            if (boxTop < triggerButton) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
        })
    }
}

createElement()
createElement()
createElement()
createElement()
createElement()
createElement()
createElement()
createElement()
createElement()
createElement()
createElement()