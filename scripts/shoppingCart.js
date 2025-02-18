document.addEventListener('DOMContentLoaded', () => {
    function createShoppingCart() {
        document.querySelector("[data-shopping-cart]").innerHTML = localStorage.getItem("products")
    }
    createShoppingCart()
})