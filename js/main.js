$(function () {
	$('.header__nav-toggle').click(function (e) {
		e.preventDefault();
		$('body').css('overflow', 'hidden');
		$('.nav').fadeIn('fast');
	});

	$('.nav__toggle').click(function (e) {
		e.preventDefault();
		$('.nav').fadeOut('fast');
		$('body').css('overflow', 'visible');
	});
});