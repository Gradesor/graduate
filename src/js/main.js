$('.nav-menu__btn').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('nav-menu__btn_active');
})