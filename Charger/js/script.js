//smooth scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

let header = document.querySelector('.header');
let headerLayout = document.querySelector('.header-layout');
let menu = document.querySelector('.nav-menu');
let menuButton = document.querySelector('.menu');
let menuButton_lines = document.querySelectorAll('.menu-button__lines');
let menuItems = document.querySelectorAll('.nav-menu__items');
menuButton.onclick = toggleCLasses;
for ( let i = 0; i < menuItems.length; i++){
		menuItems[i].onclick = removeClasses;
	};
	headerLayout.onclick =  removeClasses;
function toggleCLasses() {
	menu.classList.toggle('nav-menu-active'),
	headerLayout.classList.toggle('header-layout-active');
	for ( let i = 0; i < menuButton_lines.length; i++){
		menuButton_lines[i].classList.toggle('menu-button__lines-active');
	}
};
function removeClasses() {
	menu.classList.remove('nav-menu-active'),
	headerLayout.classList.remove('header-layout-active');
	for ( let i = 0; i < menuButton_lines.length; i++){
		menuButton_lines[i].classList.remove('menu-button__lines-active');
	}
};
// swiper-slider
new Swiper('.testimonials-swiper', {
	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
});
