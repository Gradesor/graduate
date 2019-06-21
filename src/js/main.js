$(document).ready(function () {	
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
	
	function resizeScrenn() {
		if ($(window).width() >= 1020) {
			$('.nav-menu__btn').on('click', function (e) {
				e.preventDefault();
				$(this).toggleClass('nav-menu__btn_active');
				$('.nav-menu__info').toggleClass('nav-menu__info_active');
				$('#menu1').removeClass('nav-popup_active');
			})
			$('#clothes').on('click', function () {
				if ($('#menu1').hasClass('nav-popup_active') == false) {
					$('#menu1').toggleClass('nav-popup_active');
				}
				if ($('#clothes').hasClass('nav-menu__item_active') == true) {
					$('#menu1').toggleClass('nav-popup_active');
				}

				$('#clothes').toggleClass('nav-menu__item_active');
				$('#textile').removeClass('nav-menu__item_active');
				$('#school').removeClass('nav-menu__item_active');
				$('#block1').toggleClass('nav-popup__block_active');
				$('#block2').removeClass('nav-popup__block_active');
				$('#block3').removeClass('nav-popup__block_active');
				$('#list1').toggleClass('nav-list_active');
				$('#list2').removeClass('nav-list_active');
				$('#list3').removeClass('nav-list_active');				
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
				$('#block1').removeClass('nav-popup__block_active');
				$('#block2').toggleClass('nav-popup__block_active');
				$('#block3').removeClass('nav-popup__block_active');
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
				$('#block1').removeClass('nav-popup__block_active');
				$('#block2').removeClass('nav-popup__block_active');
				$('#block3').toggleClass('nav-popup__block_active');
			})
			$('#item1_1_1').mouseenter(function () {
				$('#list1_1').addClass('nav-list_active');
				console.log('as')
				$('#item1_1_1').css('background-color', '#e0f7fa')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_2').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#e0f7fa')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_3').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#e0f7fa')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_4').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#e0f7fa')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_5').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#e0f7fa')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_6').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#e0f7fa')
				$('#item1_1_7').css('background-color', '#fff')
			})
			$('#item1_1_7').mouseenter(function () {
				$('#list1_1').removeClass('nav-list_active');
				$('#item1_1_1').css('background-color', '#fff')
				$('#item1_1_2').css('background-color', '#fff')
				$('#item1_1_3').css('background-color', '#fff')
				$('#item1_1_4').css('background-color', '#fff')
				$('#item1_1_5').css('background-color', '#fff')
				$('#item1_1_6').css('background-color', '#fff')
				$('#item1_1_7').css('background-color', '#e0f7fa')
			})

			$('#item1_2_1').mouseenter(function () {
				$('#list1_2_3').removeClass('nav-list_active');
				$('#item1_2_1').css('background-color', '#e0f7fa')
				$('#item1_2_2').css('background-color', '#fff')
				$('#item1_2_3').css('background-color', '#fff')
				$('#item1_2_4').css('background-color', '#fff')
			})
			$('#item1_2_2').mouseenter(function () {
				$('#list1_2_3').removeClass('nav-list_active');
				$('#item1_2_2').css('background-color', '#e0f7fa')
				$('#item1_2_1').css('background-color', '#fff')
				$('#item1_2_3').css('background-color', '#fff')
				$('#item1_2_4').css('background-color', '#fff')
			})
			$('#item1_2_3').mouseenter(function () {
				$('#list1_2_3').addClass('nav-list_active');
				$('#item1_2_3').css('background-color', '#e0f7fa')
				$('#item1_2_1').css('background-color', '#fff')
				$('#item1_2_2').css('background-color', '#fff')
				$('#item1_2_4').css('background-color', '#fff')
			})
			$('#item1_2_4').mouseenter(function () {
				$('#list1_2_3').removeClass('nav-list_active');
				$('#item1_2_4').css('background-color', '#e0f7fa')
				$('#item1_2_2').css('background-color', '#fff')
				$('#item1_2_3').css('background-color', '#fff')
				$('#item1_2_1').css('background-color', '#fff')
			})			
		} else {
			$('.nav-popup').children('.container').css('padding', '0')
			$('.nav-menu__btn').on('click', function (e) {				
				e.preventDefault();
				$(this).toggleClass('nav-menu__btn_active');
				$('#menu1').toggleClass('nav-popup_active');
				let heightPop = $('.nav-list_mob').height();				
				heightPop+=40
				heightPop+='px'
				$('#menu1').css('height', heightPop)
			})
			$('#Mclothes').on('click', function () {
				$('#Mclothes').children('.nav-list__img').css('transform','rotate(90deg)')
				$('#Mbox1').toggleClass('nav-list__item_active');				
				$('#Mtextile').removeClass('nav-list_active');
				$('#Mschool').removeClass('nav-list_active');
				$('#Mlist1').toggleClass('nav-list_active');
				let heightPop = $('.nav-list_mob').height();
				heightPop += 4
				heightPop += 'px'
				$('#menu1').css('height', heightPop)
				if ($('#Mbox1').hasClass('nav-list__item_active') == false) {
					$('#Mclothes').children('.nav-list__img').css('transform', 'none');
				};
				$('#list2').removeClass('nav-list_active');
				$('#list3').removeClass('nav-list_active');				
			})
		}
	}
	resizeScrenn();
	$(window).resize(function () {
		resizeScrenn();
	});
	
	/* $('#textile').on('click', function () {
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
		$('#block1').removeClass('nav-popup__block_active');
		$('#block2').toggleClass('nav-popup__block_active');
		$('#block3').removeClass('nav-popup__block_active');		
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
		$('#block1').removeClass('nav-popup__block_active');
		$('#block2').removeClass('nav-popup__block_active');
		$('#block3').toggleClass('nav-popup__block_active');
	}) */
	
	/* $('.card__item').mouseenter(function(){
		$(this).children('.card').children('.card__box').css('display', 'flex');
		$(this).children('.card').css('position', 'absolute');
	});
	$('.card__item').mouseleave(function () {
		$(this).children('.card').children('.card__box').css('display', '#fff');
		$(this).children('.card').css('position', 'relative');
	}); */
	//слайдеры
	$('.slider').owlCarousel({
		margin: 30,
		loop: true,
		nav: true,
		dots: false,
		pagination: true,
		margin: 30,
		responsiveClass: true,
		navContainer: ".arrows",
		navElement: "div",
		navText: [''],
		responsive: {
			0: {
				items: 1,
				autoWidth: true,
				nav: false,
				margin: 0
			},
			700: {
				items: 2,
				autoWidth: true,
				nav: false,
				margin: 0
			},
			960: {
				items: 3
			}
		}
	})
	$('.slider2').owlCarousel({
		margin: 30,
		loop: true,
		nav: true,
		dots: false,
		pagination: true,
		margin: 30,
		responsiveClass: true,
		navContainer: ".arrows2",
		navElement: "div",
		navText: [''],
		responsive: {
			0: {
				items: 1,
				autoWidth: true,
				nav: false,
				margin: 0
			},
			700: {
				items: 2,
				autoWidth: true,
				nav: false,
				margin: 0
			},
			960: {
				items: 3
			}
		}
	})	
});