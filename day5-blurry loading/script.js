const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
let int = setInterval(blurry, 30)


function blurry() {
    load++
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity=scale(load,0,100,1,0)
    bg.style.filter=`blur(${scale(load,0,100,31,0)}px)`
}

//map a range of number
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}