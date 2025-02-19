
document.addEventListener('DOMContentLoaded', () => {
    const cartItemContainer = document.querySelector("[data-items]");
    const buttonOrder = document.querySelector("[data-order-send]");
    const cartAmountTotal = document.querySelector("[data-order-price]");

    let sum = 0.00;
    cartAmountTotal.textContent = sum.toFixed(2);

    // Function update localStorage
    const updateStorage = () => {
        const pattern = cartItemContainer.innerHTML.trim();
        pattern.length ? localStorage.setItem("products", pattern) : localStorage.removeItem("products");
    };

    // Function create cart from localStorage
    const createShoppingCart = () => {
        cartItemContainer.innerHTML = localStorage.getItem("products") || '';
        amountTotalStorage();
    };

    // Function calculate total amount from localStorage
    const amountTotalStorage = () => {
        document.querySelectorAll(".cart-order-product").forEach(e => {
            const price = Number(e.querySelector("[data-price]").textContent);
            const value = Number(e.querySelector("[data-val]").textContent);
            amountTotal(price * value);
        });
    };

    // Function update total amount
    const amountTotal = (amount) => {
        sum += amount;
        cartAmountTotal.textContent = sum.toFixed(2);
    };

    createShoppingCart();

    cartItemContainer.addEventListener('click', (e) => {
        if (e.target.closest('.cart-close')) {
            const cartProduct = e.target.closest('.cart-order-product');
            const priceClear = parseFloat(cartProduct.querySelector("[data-price]").textContent);
            const valClear = parseInt(cartProduct.querySelector("[data-val]").textContent, 10);
            cartProduct.remove();
            amountTotal(-priceClear * valClear);
            updateStorage();
        }
    });

    // Processor for sending order
    buttonOrder.addEventListener('click', () => {
        const radioGroup1 = document.querySelector('input[name="radio_1"]:checked')?.value;
        console.log(radioGroup1);
        const radioGroup2 = document.querySelector('input[name="radio_2"]:checked')?.value;
        console.log(radioGroup2);
    });
});
