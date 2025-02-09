// Cards
const amount = document.querySelectorAll(".amount")
amount.forEach((button) => {
    let counter = 1;
    button.addEventListener("click", (e) => {
        if (e.target.textContent == "+") {
            counter++
        } else if (e.target.textContent == "-" && counter > 1) {
            counter--
        }
        e.currentTarget.querySelector('.amount-input').value = counter;
    })
})



const buttonCart = document.querySelector(".header__cart")
const buttonDropCart = document.querySelector(".header__drop-cart-container")
buttonCart.addEventListener('click', (e) => {
    buttonDropCart.classList.toggle("flex")
    buttonCart.classList.toggle("header__button-drop")
})


// Slider
const slides = document.querySelectorAll(".slider__items-inner")
let slideIndex = 0
let intervalId = null

document.addEventListener("DOMContentLoaded", initilizatioin)

function initilizatioin() {
    slides[slideIndex].classList.add("flex")
    intervalId = setInterval(nextSlide, 5000)
}

function showSlides(index){
if(index>=slides.length){
    slideIndex=0
}else if(index<0){
    slideIndex = slides.length-1
}
slides.forEach(slide =>{
    slide.classList.remove("flex")
})
    slides[slideIndex].classList.add("flex")
}

function prevSlide() {
slideIndex--
    showSlides(slideIndex)
}

function nextSlide() {
slideIndex++
    showSlides(slideIndex)
}

	