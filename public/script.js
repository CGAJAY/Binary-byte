const burgerToggle = document.getElementById('burger-toggle');
const closeToggle = document.getElementById('close-toggle')
const MenuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const bodyCont = document.getElementById('body-cont');


MenuToggle.addEventListener("click", mobileNav);


function mobileNav(){
	burgerToggle.classList.toggle('hidden');
	closeToggle.classList.toggle('hidden');
	navMenu.classList.toggle('remove');
	navMenu.classList.toggle('active');
	if(burgerToggle.classList.contains('hidden')){
		bodyCont.addEventListener("click", mobileNav);
	} else{
		
		bodyCont.removeEventListener("click", mobileNav);
	}
	
};


