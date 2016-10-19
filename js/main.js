$(function () {
	$('.header__nav-toggle').click(function (e) {
		e.preventDefault();
		$(this).find('span').toggleClass('fa-bars').toggleClass('fa-close');
		$('body').toggleClass('body--toggled');
		$('.nav').toggleClass('nav--toggled');
	});
});