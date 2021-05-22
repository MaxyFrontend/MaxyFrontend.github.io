let nav = document.querySelector('.nav');
let navButton = document.querySelector('.nav-button');
let navButton_lines = document.querySelectorAll('.nav-button__lines');
let headerLayer = document.querySelector('.header-layer');
let navItems = document.querySelectorAll('.nav-items');
navButton.onclick = function() {
	nav.classList.toggle('nav-active'),
	headerLayer.classList.toggle('header-layer-active'),
	navButton.classList.toggle('nav-button-active');
	for( let i = 0; i < navButton_lines.length; i++){
		navButton_lines[i].classList.toggle('nav-button__lines-active');
	}
};
function removeClasses() {
	nav.classList.remove('nav-active'),
	headerLayer.classList.remove('header-layer-active'),
	navButton.classList.remove('nav-button-active');
	for( let i = 0; i < navButton_lines.length; i++){
		navButton_lines[i].classList.remove('nav-button__lines-active');
	}
}
headerLayer.onclick = removeClasses;
 for( let i = 0; i < navItems.length; i++){
		navItems[i].onclick = removeClasses;
	}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let input = document.querySelectorAll('.contact__input');
let inputTypeNumber = document.querySelector("#input-3");
let regex = /[a-z!@#№$%^&*_+\=\[\]{};':"\\|,.<>\/?]/;
let label = document.querySelectorAll('.contact__label');
input.forEach(item => {
	item.addEventListener('focus', function() {
			this.parentElement.classList.add('move-placeholder');
})
	item.addEventListener('blur', function() {
		if(item.value.length <= 0) {
			this.parentElement.classList.remove('move-placeholder');
		}
})
})
 inputTypeNumber.addEventListener('input', function() {
 		this.value = this.value.replace(regex, '');
 	
 });



