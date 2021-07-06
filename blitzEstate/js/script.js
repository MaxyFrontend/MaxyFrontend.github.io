let html = document.querySelector('html');
let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let buttonLine = document.querySelector('.button__line');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav__item');
menu.addEventListener('click', toggleMenu);
function toggleMenu() {
	menuButton.classList.toggle('menu__button-active'),
	nav.classList.toggle('nav-active');
	if (nav.classList.contains('nav-active')) {
		html.style.overflowY = "hidden";
	}
	else if (!nav.classList.contains('nav-active')) {
		html.style.overflowY = "visible";
	}
}
function hideMenu() {
	nav.classList.remove('nav-active'),
	menuButton.classList.remove('menu__button-active');
	html.style.overflowY = "visible";
	}



/*									swiper slider							*/
new Swiper('.test__slider', {
	navigation: {
		nextEl:'.question__pagination .swiper-button-next'
	},
	speed:800,
	loop:false,
	fadeEffect: { crossFade: true },
	effect: "fade",
	virtualTranslate: true,
	slidesPerView: 2,
	allowTouchMove: false
});



let galleryThumbs = new Swiper('.experience__slider-pagination', {
	breakpoints: {
			800: {
				sliderPerView:3
			},
			950: {
			slidesPerView: 4
		}
	},
	spaceBetween: 5,
      slidesPerView: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
})
new Swiper('.expirience__right-block', {
	thumbs: {
        swiper: galleryThumbs
      },
	fadeEffect: { crossFade: true },
	effect: "fade",
	allowTouchMove: false,
	speed:1000,
})
document.querySelector('.experience__slider-pagination').addEventListener('click', function(e) {

})

// let pgImage = document.querySelectorAll('.experience__image-pg');
// let pg = document.querySelector('.experience__slider-pagination');
// pgImage[0].classList.add('experience__image-pg-active');
// pg.addEventListener('click', (event) => {
//  	if(event.target.classList.contains('experience__image-pg')) {
//  		pgImage.forEach(item => {
//  			item.classList.remove('experience__image-pg-active')
//  		})
//  		event.target.classList.add('experience__image-pg-active');
//  	};
// })
/*									swiper slider							*/


/*											test											*/
let question = document.querySelectorAll('.question__body');
let questionItem = document.querySelectorAll('.question__item');
	question.forEach(item => {
		item.addEventListener('click', (e) => {
		let selected = e.target;
		if(selected.classList.contains('question__item')) {
			for(let i = 0; i < questionItem.length; i++) {
				questionItem[i].classList.remove('question__item-active');
				selected.classList.add('question__item-active');
				nextEL.forEach(item => {
					item.classList.remove('swiper-button-disabled');
				})
			}
		}
		else if(selected.parentNode.classList.contains('question__item')) {
			for(let i = 0; i < questionItem.length; i++) {
				questionItem[i].classList.remove('question__item-active');
				selected.parentNode.classList.add('question__item-active');
				nextEL.forEach(item => {
					item.classList.remove('swiper-button-disabled');
				})
			}
		}
		})

	})

let nextEL = document.querySelectorAll('.test .swiper-button-next');
nextEL.forEach(item => {
	item.setAttribute('aria-disabled', 'true');
	item.classList.add('swiper-button-disabled');
})

for(let i = 0; i < nextEL.length; i++) {
	nextEL[i].addEventListener('click', function() {
	if(questionItem.forEach(item => {
		item.classList.contains('question__item-active');
	}))
	{
			nextEL[i].setAttribute('aria-disabled', 'true');
			nextEL[i].classList.add('swiper-button-disabled');
	}
	else {
		nextEL.forEach(item => {
	item.setAttribute('aria-disabled', 'true');
	item.classList.add('swiper-button-disabled');
})
	}
})
}


/*											test											*/




/*											accordeon											*/
let serviceWrapper = document.querySelector('.services__wrapper');
let serviceItem = document.querySelectorAll('.services__item');
let accordeon = document.querySelectorAll('.services__item-accordeon');
let accordeonText = document.querySelectorAll('.services__item-text');
accordeon.forEach(item => {
		item.style.maxHeight = 22 + "px";
	})
serviceWrapper.addEventListener('mouseover', accordeonOn);
serviceWrapper.addEventListener('mouseout', accordeonOff);
function accordeonOn(e) {
	let selected = e.target;
	let accordeonHeight;
	if(selected.classList.contains('services__item') || selected.closest('.services__item')) {
		serviceItem.forEach(item => {
			item.classList.remove('services__item-active');
		})
			accordeonText.forEach(item => {
			accordeonHeight = selected.closest('.services__item').querySelector('.services__item-accordeon').scrollHeight;
	});
	if(accordeonHeight >= 130) {
		accordeonHeight = 130;
	}
	console.log(accordeonHeight);
		selected.closest('.services__item').classList.add('services__item-active');
		selected.closest('.services__item').querySelector('.services__item-accordeon').style.maxHeight = accordeonHeight + "px";
	}
}
function accordeonOff() {
	serviceItem.forEach(item => {
			item.classList.remove('services__item-active');
		})
	accordeon.forEach(item => {
		item.style.maxHeight = 22 + "px";
	})
}





/*											accordeon											*/




/*											appartaments-filter											*/

let filter = document.querySelector('.apartaments__filter');
let filterItem = document.querySelectorAll('.filter-item');
let appsItem = document.querySelectorAll('.apartaments__item');
 filter.addEventListener('click', (event) => {
 	let sel = event.target.dataset.filter;
 	if(event.target.classList.contains('filter-item')) {
 		filterItem.forEach(item => {
 			item.classList.remove('filter-item-active')
 		})
 		event.target.classList.add('filter-item-active');
 	
 	appsItem.forEach(item => {
 		item.classList.remove('apartaments__item-hide');
 		if(item.dataset.price !== sel && sel !== 'all') {
 			item.classList.add('apartaments__item-hide');
 		}
 	})
 	};
 })
/*											appartaments-filter											*/

/*											appartaments_show-more											*/

 let appsBody = document.querySelector('.apartaments__body');
 let appsWrapper = document.querySelector('.apartaments__wrapper');
 let showMore = document.querySelector('.apartaments__show-more');
 let showLess = document.querySelector('.apartaments__show-less');
 let rowsNumber = 3;
 let heightSum;
 function heightLimitFunc() {
 	heightSum = 0;
 	 let count = 0;
 for(let i = 0;i<appsItem.length;i++){
 	if(!appsItem[i].classList.contains('apartaments__item-hide')) {
 		heightSum += appsItem[i].offsetHeight;
 		count++;
 	}
 }
 let rowGap = window.getComputedStyle(appsWrapper).getPropertyValue("gap");
 rowGap = parseInt(rowGap.match(/\d+/));
 heightSum = (heightSum/count*rowsNumber)+(rowGap * rowsNumber);
 appsBody.style.maxHeight = heightSum + "px";
 }
  window.onload = heightLimitFunc;
 window.addEventListener('resize', heightLimitFunc);
 showMore.onclick = () => {
 	showMore.style = "display:none;";
 	appsBody.style.maxHeight = appsBody.scrollHeight + "px";
 	showLess.style = "display:block;";
 }
 showLess.onclick =() => {
 	showMore.style = "display:block;";
 	showLess.style = "display:none;";
 	heightLimitFunc();
 }

filterItem.forEach(item => {
	item.onclick = () => {
		appsBody.style.maxHeight = heightSum + "px";
		showLess.style = "display:none;";
		showMore.style = "display:block;";
	}
})

/*											appartaments_show-more											*/