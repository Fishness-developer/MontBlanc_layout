// Set Cookies
/* function setCookie(name, value, days) {
			let expires = "";
			if (days) {
				const date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toUTCString();
			}
			console.log(document.cookie =name + "=" +  value + expires);
			 
		}
			//const urlParams = new URL(window.location.href);
			const urlParams = new URL('http://site.com?token=1798805276176326656-OopZ0K9glnaLEdOj34ID4xwDQmTj6i&id=1798805276176326656');
			const token=urlParams.searchParams.get('token');
			const id = urlParams.searchParams.get('id');
		
			setCookie("token", token, 7);  
			setCookie('id', id, 7); */


/*let counter = 1;

const buttonIncrease = document.querySelectorAll(".amount [data-amount]")
console.log(buttonIncrease[0])
const inputAmount = document.querySelectorAll(".amount-input");
	buttonIncrease.forEach((button)=>{
		button.addEventListener("click", (e)=>{
			if(e.target==buttonIncrease[0] && counter>1){
			    counter --
			}else if(button==buttonIncrease[1]){
			    counter ++
			}
			inputAmount.forEach((item)=>{
				item.value =counter; 
			})
			
			
		})
	})*/
let counter = 1;

const buttonIncrease = document.querySelectorAll(".amount [data-amount]")
const inputAmount = document.querySelectorAll(".amount-input");
const cart = document.querySelectorAll('[data-cart]')	 
const cartItem = document.querySelectorAll('[data-product-name]') 

	cartItem.forEach((item)=>{
		item.addEventListener('click', (e)=>{
			cart.forEach((item)=>{
				if(e.target == item){
					let name = e.currentTarget.getAttribute('data-product-name')
					console.log(name)
			   }
			})
			
		})
	})

 

	