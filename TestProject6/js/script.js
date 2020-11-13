let nav = document.querySelector('.nav');
let navButton = document.querySelector('.nav-button');
let navButton_lines = document.querySelectorAll('.nav-button__lines');
navButton.onclick = function() {
	nav.classList.toggle('nav-active'),
	navButton.classList.toggle('nav-button-active');
	for( let i = 0; i < navButton_lines.length; i++){
		navButton_lines[i].classList.toggle('nav-button__lines-active');
	}
};
