$(document).ready(function () {
	$(".js-close-btn").on("click", function(){
		$(".open").removeClass("open");
	});
	$(".open").removeClass("open");
	$(".allClose").on("click", function(){
		$(".open").removeClass("open");
	})
	$(".js-tab-click").on("click", function(){
	    $(".filter__tab").removeClass("active");
	    $(this).addClass("active");
	    var data = $(this).attr("data");
	    $(".filter__block").addClass("hidden");
	    $("body").find("div [data='" + data +"-block']").removeClass("hidden");
	});
	$(".js-dropdown-click").on("click", function(){
		$(".dropdown__body").addClass("open");
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".dropdown__body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("open"); // скрываем его
		}
	});
	$(".js-dropdown-order-call").on("click", function(){
		$(".dropdown__body").removeClass("open");
		$(".show_message_ok").removeClass("hidden");
		setTimeout(function() { $(".show_message_ok").addClass('hidden'); }, 1000);
	});
	$(".js-open").on("click", function(){
		$(".filter__choose-goods").removeClass("hidden");
		$(".filter__choose-car").addClass("hidden");
	});
	$(".js-close").on("click", function(){
		$(".filter__choose-goods").addClass("hidden");
		$(".filter__choose-car").removeClass("hidden");
	});

	
});