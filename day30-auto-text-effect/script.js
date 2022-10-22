const speedEl = document.getElementById('speed')
const textEl = document.getElementById('text')
const text = "We love programming"
let idx = 1;

let speed = 300 / speedEl.value

getText()

function getText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }

    setTimeout(getText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)