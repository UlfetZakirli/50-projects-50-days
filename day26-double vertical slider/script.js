const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlider = document.querySelector('.left-slide')
const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sliderLenght = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0;
leftSlider.style.top = `-${(sliderLenght-1)*100}vh`

downBtn.addEventListener('click', () => changeSlide('down'))
upBtn.addEventListener('click', () => changeSlide('up'))

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > sliderLenght - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLenght - 1
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    leftSlider.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`

}