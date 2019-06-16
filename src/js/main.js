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
});