$(function(){
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
});
});
$(document).ready(function(){
$('#nav-button').click(function() {
	$(this).toggleClass('nav-button-active'),
	$('.nav-button__lines').toggleClass('button__lines-active'),
	$('.nav').toggleClass('nav-active');
})
});
  $('.nav__items a').click(function () {
$(".nav-button__lines").removeClass('button__lines-active'),
 $(".nav").removeClass('nav-active');
 });
$(document).mouseup(function (e){
		if (!$(".nav").is(event.target)
			&& !$("#nav-button").is(event.target)
			&& $("#nav-button").has(event.target).length === 0
		 && $(".nav").has(event.target).length === 0){
			$(".nav").removeClass('nav-active'),
		$(".nav-button__lines").removeClass('button__lines-active');
		}
	});
$(document).ready(function(){
  $('.banner .slider').slick({
  	infinite:false,
    arrows:true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:700,
  });
  $('.offers_section .slider').slick({
		infinite:true,
		arrows:false,
		dots:false,
		slidesToShow:5,
		slidesToScroll:2,
		variableWidth: true,
		waitForAnimate:false,
		touchTreshhold:15,
		adaptiveHeight:false,
		responsive:   [
      {
        breakpoint: 650,
        settings: {
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  });
});
$('.clients_section .slider').slick({
	infinite:true,
	arrows:false,
	dots:false,
	variableWidth:true,
	slidesToShow:5,
	centerMode: true
});
$(document).ready(function(){
	$('.arrow-down').click(function () {
		$(this).toggleClass("arrow-down-active"),
		$(this).parent(".slider__item__description").next(".slider__item__description_items_block").toggleClass('description_items_block-show')
	})
});


