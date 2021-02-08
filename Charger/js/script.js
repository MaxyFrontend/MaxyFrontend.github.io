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
//smooth scroll

//menu
let html = document.querySelector('html');
const header = document.querySelector('.header');
let headerLayout = document.querySelector('.header-layout');
let menu = document.querySelector('.nav-menu');
let menuButton = document.querySelector('.menu');
let menuButton_lines = document.querySelectorAll('.menu-button__lines');
let menuItems = document.querySelectorAll('.nav-menu__items');
menuButton.onclick = showMenu;
for ( let i = 0; i < menuItems.length; i++){
		menuItems[i].onclick = hideMenu;
	};
	headerLayout.onclick =  hideMenu;
function showMenu() {
	menu.classList.toggle('nav-menu-active'),
	headerLayout.classList.toggle('header-layout-active');
	for ( let i = 0; i < menuButton_lines.length; i++){
		menuButton_lines[i].classList.toggle('menu-button__lines-active');
	}
};
function hideMenu() {
	menu.classList.remove('nav-menu-active'),
	headerLayout.classList.remove('header-layout-active');
	for ( let i = 0; i < menuButton_lines.length; i++){
		menuButton_lines[i].classList.remove('menu-button__lines-active');
	}
};
//menu

//header-hide
let lastScroll = 0;
const defaultOffset = 200;

const scrollPosition = () => {
	return window.pageYOffset || document.documentElement.scrollTop;
}
const containHide = () => {
	return header.classList.contains('header-hide');
}

window.addEventListener('scroll', () => {
	if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset && !menu.classList.contains('nav-menu-active')) {
		header.classList.add('header-hide');
	}
	else if(scrollPosition() < lastScroll && containHide()){
		header.classList.remove('header-hide');
	}

	lastScroll = scrollPosition();
})

//header-hide

// swiper-slider
new Swiper('.testimonials-swiper', {
	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
});
