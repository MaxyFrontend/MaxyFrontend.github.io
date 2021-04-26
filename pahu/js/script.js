window.onload = function () {
	document.querySelector('.preload').classList.remove('preload');
}

/*									header hide							*/
const header = document.querySelector('.header');
let lastScroll = 0;
const defaultOffset = 400;

const scrollPosition = () => {
	return window.pageYOffset || document.documentElement.scrollTop;
}
const containHide = () => {
	return header.classList.contains('header-hide');
}

window.addEventListener('scroll', () => {
	if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset && !nav.classList.contains('nav-active')) {
		header.classList.add('header-hide');
	}
	else if(scrollPosition() < lastScroll && containHide()){
		header.classList.remove('header-hide');
	}

	lastScroll = scrollPosition();
})
/*									header hide							*/


/*									nav menu							*/
const html = document.querySelector('html');
let nav = document.querySelector('.nav');
let navItems = document.querySelectorAll('.nav-item');
let button = document.querySelector('.button');
let buttonLine = document.querySelector('.button-line');
function showMenu(){
	nav.classList.toggle('nav-active'),
	button.classList.toggle('button-active'),
	html.classList.toggle('no-scroll');
}
function hideMenu() {
	nav.classList.remove('nav-active'),
	button.classList.remove('button-active'),
	html.classList.remove('no-scroll');
	}
button.onclick = showMenu;
for (var i = 0; i < navItems.length; i++) {
	navItems[i].onclick = hideMenu;
}


/*									nav menu							*/



/*									swiper slider							*/
new Swiper('.main__slider', {
	navigation: {
		nextEl:'.main .swiper-button-next',
		prevEl:'.main .swiper-button-prev',
	},
	speed:700,
	loop:false
});

new Swiper('.projects__slider', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed:700,
	loopedSlides:4,
	loop:true,
	breakpoints: {
	500: {
		slidesPerView: 2,
		slidesPerGroup: 2,
	},
			867: {
			slidesPerView: 4,
			slidesPerGroup: 2,
		}
	},
		navigation: {
		nextEl:'.projects .swiper-button-next',
		prevEl:'.projects .swiper-button-prev',
	},
});
/*									swiper slider							*/


/*									input							*/
let input = document.querySelector('#footer-bottom__input');
let placeholder = document.querySelector('.footer-bottom__placeholder');

input.addEventListener('input', function() {
		if(input.value.length >= 1) {
			placeholder.classList.add('transparent-placeholder');
		}
		else if(input.value.length <= 0) {
			placeholder.classList.remove('transparent-placeholder');
		}
	});