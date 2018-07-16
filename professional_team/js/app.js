'use strict';

$('.page-tests__test-year_seasons').each(function () {
	let father = $(this);
	let i_need;
	$(this).children('li').click(function () {
		father.children('li').removeClass('active');
		$(this).addClass('active');
		tabs_tests($(this).index());
	});
	function tabs_tests(point) {
		father.parent().children('.page-tests__test-year_seasons-blocks').removeClass('active');
		father.parent().children('.page-tests__test-year_seasons-blocks').eq(point).addClass('active');

	}
});

$(".what-are-you-interested__blocks").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
		top = top-20;
	
	$('body,html').animate({scrollTop: top}, 1000);
});



















