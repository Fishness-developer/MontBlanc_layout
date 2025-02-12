// CART FUNCTIONS
const amount = document.querySelectorAll(".amount")
amount.forEach((button) => {
    let counter = 1;
    button.addEventListener("click", (e) => {
        if (e.target.textContent === "+") {
            counter++
        } else if (e.target.textContent === "-" && counter > 1) {
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

const amountProducts = document.querySelector("[data-amount]")
const cartItemContainer = document.querySelector("[data-items]")
const cartAmountTotal = document.querySelector(".cart-amount-total")

let valNumber = 0
let sum = 0.00

amountProducts.textContent = valNumber
cartAmountTotal.textContent = sum.toFixed(2)


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    buttonDropCart.classList.add("flex")
    buttonCart.classList.add("header__button-drop")
}

function updateCartVisibility() {
    const cartTotal = document.querySelector("[data-cart-total]");
    cartTotal.classList.toggle("hide", valNumber === 0);
    cartTotal.classList.toggle("flex", valNumber !== 0);
}

function sumItems(val) {
    valNumber += val
    amountProducts.textContent = valNumber
    updateCartVisibility()
}

function amountTotal(amount) {
    sum += amount;
    cartAmountTotal.textContent = sum.toFixed(2);
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
                let priceItem = parseInt(e.currentTarget.querySelector('.extra').textContent)
                let imgItem = e.currentTarget.querySelector('.item-image img').src
                let val = parseInt(e.currentTarget.querySelector('.amount-input').value)
                cartItemContainer.innerHTML += `
                    <div class="cart-order-product">
                         <div class="cart-image"><img src="${imgItem}" /> </div>
                         <p data-name>${nameItem}</p>
                         <p><span data-price>${priceItem.toFixed(2)}</span> ₪</p>
                         <div><span data-val>${val}</span> pcs</div>
                         <div class="cart-close"><img src="images/svg/close.svg" /></div>
                    </div>
                    `
                sumItems(val)
                amountTotal(priceItem * val)

                document.querySelectorAll('.cart-close').forEach(closeBtn => {
                    closeBtn.addEventListener('click', e => {
                        const cartProduct = e.currentTarget.parentNode;
                        const priceClear = parseFloat(cartProduct.querySelector("[data-price]").textContent);
                        const valClear = parseInt(cartProduct.querySelector("[data-val]").textContent, 10);

                        cartProduct.remove();
                        amountTotal(-priceClear * valClear);
                        sumItems(-valClear);
                    });
                });
                scrollToTop()
            }
        })
    })
})