// CARDS FUNCTIONS
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

//CART FUNCTIONS
document.addEventListener('DOMContentLoaded', () => {
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
        cartAmountTotal.textContent = sum.toFixed(2)
    }

    function amountTotalStorage() {
        document.querySelectorAll(".cart-order-product").forEach(e => {
            const price = Number((e.querySelector("[data-price]").textContent))
            const value = Number(e.querySelector("[data-val]").textContent)
            amountTotal(price * value)
        })
    }

    function sumItemsStorage() {
        document.querySelectorAll(".cart-order-product").forEach(e => {
            const value = Number(e.querySelector("[data-val]").textContent)
            sumItems(value)
        })
    }


    // FUNCTION LOCAL STORAGE
    const updateStorage = () => {
        let pattern = cartItemContainer.innerHTML.trim()
        pattern.length ? localStorage.setItem("products", pattern) : localStorage.removeItem("products")
    }

    const initialStorage = () => {
        if (localStorage.getItem('products') !== null) {
            cartItemContainer.innerHTML += localStorage.getItem("products")
        }
        amountTotalStorage()
        sumItemsStorage()

    }
    initialStorage()

    const cart = document.querySelectorAll('[data-cart]')
    const cartItem = document.querySelectorAll('[data-product-name]')
    const desript = document.querySelectorAll('.item-description')
    const blockAmount = document.querySelectorAll('.amount')

    cartItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            cart.forEach((item) => {
                if (e.target == item) {
                    const nameItem = e.currentTarget.querySelector('.item-description').textContent
                    const priceItem = parseInt(e.currentTarget.querySelector('.extra').textContent)
                    const imgItem = e.currentTarget.querySelector('.item-image img').src
                    const val = parseInt(e.currentTarget.querySelector('.amount-input').value)
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
                    updateStorage();
                    scrollToTop()
                }
            })
        })
    })

    cartItemContainer.addEventListener('click', (e) => {
        if (e.target.closest('.cart-close')) {
            const cartProduct = e.target.closest('.cart-order-product');
            const priceClear = parseFloat(cartProduct.querySelector("[data-price]").textContent);
            const valClear = parseInt(cartProduct.querySelector("[data-val]").textContent, 10);
            cartProduct.remove();
            amountTotal(-priceClear * valClear);
            sumItems(-valClear);
            updateStorage();
        }
    });
})
