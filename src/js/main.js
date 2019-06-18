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
	$('.footer-block__btn').on('click', function () {
		modal.addClass('call_active');
	});

	$('.call-form__input').mask('8 (999) 999-99-99')

	$('#clothes').on('click', function() {
		if ($('#menu1').hasClass('nav-popup_active')==false){
			$('#menu1').toggleClass('nav-popup_active');
		}
		if ($('#clothes').hasClass('nav-menu__item_active') == true) {
			$('#menu1').toggleClass('nav-popup_active');
		}
		$('#clothes').toggleClass('nav-menu__item_active');
		$('#textile').removeClass('nav-menu__item_active');
		$('#school').removeClass('nav-menu__item_active');
		$('#list1').toggleClass('nav-list_active');
		$('#list2').removeClass('nav-list_active');
		$('#list3').removeClass('nav-list_active');
		$('#block1').toggleClass('popup__block_active');
		$('#block2').removeClass('popup__block_active');
		$('#block3').removeClass('popup__block_active');
	})
	$('#textile').on('click', function () {
		if ($('#menu1').hasClass('nav-popup_active') == false) {
			$('#menu1').toggleClass('nav-popup_active');
		}
		if ($('#textile').hasClass('nav-menu__item_active') == true) {
			$('#menu1').toggleClass('nav-popup_active');
		}
		$('#clothes').removeClass('nav-menu__item_active');
		$('#textile').toggleClass('nav-menu__item_active');
		$('#school').removeClass('nav-menu__item_active');
		$('#list1').removeClass('nav-list_active');
		$('#list2').toggleClass('nav-list_active');
		$('#list3').removeClass('nav-list_active');
		$('#block1').removeClass('popup__block_active');
		$('#block2').toggleClass('popup__block_active');
		$('#block3').removeClass('popup__block_active');		
	})

	$('#school').on('click', function () {
		if ($('#menu1').hasClass('nav-popup_active') == false) {
			$('#menu1').toggleClass('nav-popup_active');
		}
		if ($('#school').hasClass('nav-menu__item_active') == true) {
			$('#menu1').toggleClass('nav-popup_active');
		}
		$('#clothes').removeClass('nav-menu__item_active');
		$('#textile').removeClass('nav-menu__item_active');
		$('#school').toggleClass('nav-menu__item_active');
		$('#list1').removeClass('nav-list_active');
		$('#list2').removeClass('nav-list_active');
		$('#list3').toggleClass('nav-list_active');
		$('#block1').removeClass('popup__block_active');
		$('#block2').removeClass('popup__block_active');
		$('#block3').toggleClass('popup__block_active');
	})
	$('#item1_1_1').on('click', function () {
		$('#list1_1').toggleClass('nav-list_active');
		$('#item1_1_1').toggleClass('nav-list__item_active')
	})
	$('#item1_2_3').on('click', function () {
		$('#list1_2_3').toggleClass('nav-list_active');
		$('#item1_2_3').toggleClass('nav-list__item_active')
	})
	/* $('.card__item').mouseenter(function(){
		$(this).children('.card').children('.card__box').css('display', 'flex');
		$(this).children('.card').css('position', 'absolute');
	});
	$('.card__item').mouseleave(function () {
		$(this).children('.card').children('.card__box').css('display', 'none');
		$(this).children('.card').css('position', 'relative');
	}); */
});