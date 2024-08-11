const amount = document.querySelectorAll(".amount")
	amount.forEach((button)=>{
		let counter = 1;
		button.addEventListener("click", (e)=>{ 
			if(e.target.textContent=="+"){
			    counter ++	 
			}else if(e.target.textContent=="-" && counter>1){
			    counter --
			}
			e.currentTarget.querySelector('.amount-input').value=counter; 	
		})
	})

const cart = document.querySelectorAll('[data-cart]')	 
const cartItem = document.querySelectorAll('[data-product-name]') 
const desript = document.querySelectorAll('.item-description')
const blockAmount = document.querySelectorAll('.amount')

	cartItem.forEach((item)=>{
		item.addEventListener('click', (e)=>{
			cart.forEach((item)=>{
				if(e.target == item){
					let nameItem = e.currentTarget.querySelector('.item-description').textContent
					let priceItem = e.currentTarget.querySelector('.price').textContent 
					let imgItem = e.currentTarget.querySelector('.item-image img').src
					val = e.currentTarget.querySelector('.amount-input').value
					console.log(nameItem)
					console.log(priceItem)
					console.log(imgItem)
					console.log(val)
					alert("Товар добавлен в корзину")
					const amountItems = document.querySelector('.amount-items')
					amountItems.innerHTML = val;
			   }
			})		
		})
	})

const buttonCart = document.querySelector(".header__cart")
const buttonDropCart = document.querySelector(".header__drop-cart")
 
 buttonCart.addEventListener('click', (e)=>{
	 buttonDropCart.remove.style='display:none'
	 buttonDropCart.style.cssText='display:flex'
 })

 buttonDropCart.addEventListener('click', (e)=>{
	 buttonDropCart.remove.style='display:flex'
	 buttonDropCart.style.cssText='display:none'
 })

 

	