$(document).ready(function () {
	$('.nav-menu__btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('nav-menu__btn_active');
	})
	var button = $('.nav-item__btn');
	var modal = $('.call');
	var close = $('.call__close');
	button.on('click', function () {
		modal.addClass('call_active');
	});
	close.on('click', function () {
		modal.removeClass('call_active');
	});



	$('.call-form__input').mask('8 (999) 999-99-99')



	/* $('.card__item').mouseenter(function(){
		$(this).children('.card').children('.card__box').css('display', 'flex');
		$(this).children('.card').css('position', 'absolute');
	});
	$('.card__item').mouseleave(function () {
		$(this).children('.card').children('.card__box').css('display', 'none');
		$(this).children('.card').css('position', 'relative');
	}); */
});