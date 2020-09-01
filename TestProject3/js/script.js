$(function(){
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
});
});
$(function () {
 new Typed("#typing", {
 strings: [" Proin iaculis purus consequat sem cure.", " Just relax let us do the lifting."],
 typeSpeed: 40,
 backSpeed: 30,
 backDelay: 500,
 startDelay: 0,
 loop: true,
 loopCount: false,
 contentType: 'html' });
});
$(document).ready(function(){
 $('#nav-button_toggle').click(function () {
 $(".nav-button_lines").toggleClass('button-lines-active'),
 $(".nav").toggleClass('nav-active');
 });
  $('.nav-items a').click(function () {
$(".nav-button_lines").removeClass('button-lines-active'),
 $(".nav").removeClass('nav-active');
 });
});
$(document).mouseup(function (e){
		if (!$("#nav").is(event.target)
			&& !$("#nav-button_toggle").is(event.target)
			&& $("#nav-button_toggle").has(event.target).length === 0
		 && $("#nav").has(event.target).length === 0){
			$("#nav").removeClass('nav-active'),
		$(".nav-button_lines").removeClass('button-lines-active');
		}
	});
