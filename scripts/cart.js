
const amountProducts = document.querySelector("[data-amount]")
const cartItemContainer = document.querySelector("[data-items]")
amountProducts.innerHTML=cartItemContainer.children.length


const cart = document.querySelectorAll('[data-cart]')
const cartItem = document.querySelectorAll('[data-product-name]')
const desript = document.querySelectorAll('.item-description')
const blockAmount = document.querySelectorAll('.amount')

cartItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        cart.forEach((item) => {
            if (e.target == item) {
                let nameItem = e.currentTarget.querySelector('.item-description').textContent
                let priceItem = e.currentTarget.querySelector('.price').textContent
                let imgItem = e.currentTarget.querySelector('.item-image img').src
               let val = e.currentTarget.querySelector('.amount-input').value
                console.log(nameItem)
                console.log(priceItem)
                console.log(imgItem)
                console.log(val)
                cartItemContainer.innerHTML+=                    `
 <div class="cart-order-product">
   <div><img src="${imgItem}"</div>  
       <p>${nameItem}</p>
       <p>${priceItem}</p>
        <div>${val} pcs</div>
         <div><img src="images/svg/close.svg"></div>
 </div>
`
                alert("Товар добавлен в корзину")
                // const amountItems = document.querySelector('.amount-items')
                // amountItems.innerHTML = val;




                
            }
        })
    })
})


