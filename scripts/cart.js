// CART FUNCTIONS
const amountProducts = document.querySelector("[data-amount]")
const cartItemContainer = document.querySelector("[data-items]")
const cartAmountTotal = document.querySelector(".cart-amount-total")

let valNumber = 0
let amountCart = 0.00
let sum = 0.00

amountProducts.textContent = valNumber
cartAmountTotal.textContent = sum.toFixed(2)

function updateCartVisibility() {
    const cartTotal = document.querySelector("[data-cart-total]");
    if (valNumber !== 0) {
        cartTotal.classList.remove("hide");
        cartTotal.classList.add("flex");
    } else {
        cartTotal.classList.remove("flex");
        cartTotal.classList.add("hide");
    }
}

function sumItems(val) {
    valNumber += val
    amountProducts.textContent = valNumber
    updateCartVisibility()
}

// cartAmountTotal.innerHTML = amountCart

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

                alert("Added to cart")
            }
        })
    })
})