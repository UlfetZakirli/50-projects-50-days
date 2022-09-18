const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        //First Way
        const x = e.clientX
        const y = e.clientY

        const buttonLeft = e.target.offsetLeft
        const buttonTop = e.target.offsetTop

        const insideX = x - buttonLeft
        const insideY = y - buttonTop

        ////Second Way(directly)////

        // const x=e.offsetX
        // const y=e.offsetY
        
        const circle=document.createElement('span')
        circle.classList.add('circle')
        
        //First Way
        circle.style.left=insideX+'px'
        circle.style.top=insideY+'px'

        ////Second Way////

        // circle.style.left=x+'px'
        // circle.style.top=y+'px'
        
        

        this.appendChild(circle)


        setInterval(()=>circle.remove(),500)
    })
})