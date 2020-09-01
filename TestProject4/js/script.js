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

let button = document.querySelector('.nav-button');
let buttonLines = document.querySelectorAll('.nav-button_lines');
let nav = document.querySelector('.nav');
let navItems = document.querySelectorAll('.nav-items');
let popUp = document.querySelector('.pop-up')
  button.onclick = function(){
    buttonLines.forEach(element => {
    element.classList.toggle("nav-button_lines-active")}),
    nav.classList.toggle("nav-active"),
    popUp.classList.toggle("pop-up-active");
 }

 navItems.forEach(element => {
    element.onclick = function () {
    buttonLines.forEach(element => {
    element.classList.remove("nav-button_lines-active")}),
    nav.classList.remove("nav-active"),
    popUp.classList.remove("pop-up-active");
 };
}
)
popUp.onclick = function(){
    buttonLines.forEach(element => {
    element.classList.remove("nav-button_lines-active")}),
    nav.classList.remove("nav-active"),
    popUp.classList.remove("pop-up-active");
 }
