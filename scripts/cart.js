const amountProducts = document.querySelector("[data-amount]")
const cartItemContainer = document.querySelector("[data-items]")
const cartAmountTotal = document.querySelector(".cart-amount-total")
const cartClearButton = document.querySelectorAll((".cart-close"))


let valNumber = 0
let amountCart = 0.00
let sum = 0.00

amountProducts.innerHTML = valNumber

function sumItems() {
    amountProducts.innerHTML = valNumber
}


cartAmountTotal.innerHTML = amountCart

function amountTotal() {
    sum += amountCart
    cartAmountTotal.innerHTML = sum
}

const cart = document.querySelectorAll('[data-cart]')
const cartItem = document.querySelectorAll('[data-product-name]')
const desript = document.querySelectorAll('.item-description')
const blockAmount = document.querySelectorAll('.amount')


cartItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        cart.forEach((item) => {
            if (e.target == item) {
                let nameItem = e.currentTarget.querySelector('.item-description').textContent
                let priceItem = e.currentTarget.querySelector('.extra').textContent
                let imgItem = e.currentTarget.querySelector('.item-image img').src
                let val = e.currentTarget.querySelector('.amount-input').value
                console.log(nameItem)
                console.log(priceItem)
                console.log(imgItem)
                console.log(val)
                cartItemContainer.innerHTML +=
                    `
                    <div class="cart-order-product">
                         <div class="cart-image"><img src="${imgItem}" /> </div>
                         <p>${nameItem}</p>
                         <p>${priceItem} ₪</p>
                         <div>${val} pcs</div>
                         <div class="cart-close"><img src="images/svg/close.svg" /></div>
                    </div>
                    `
                // cartClearButton.forEach((item)=>{
                //     item.addEventListener('click', (e)=>{
                //
                //     })
                // })

                valNumber += parseInt(val)
                sumItems(valNumber)

                amountCart = parseInt(priceItem) * parseInt(val)
                amountTotal(amountCart)
                if(valNumber!==0){
                    document.querySelector("[data-cart-total]").classList.remove("hide")
                    document.querySelector("[data-cart-total]").classList.add("flex")
                }
                alert("Товар добавлен в корзину")
            }
        })
    })
})


