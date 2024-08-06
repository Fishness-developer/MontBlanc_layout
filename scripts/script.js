// Set Cookies
 function setCookie(name, value, days) {
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
			setCookie('id', id, 7); 
