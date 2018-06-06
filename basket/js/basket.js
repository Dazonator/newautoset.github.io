$(document).ready(function () {
    var pablickContractModalMainBlock = $(".bskt-footer-pablickContract_modal-main-block").height();
    $(".modal-close-click").on("click", function(){
        $("body").removeClass("modal-open");
        $("body").removeClass("overlay-open");
        $(".modal").removeClass("open");
    }) 
    $(".bskt-btn-hidden").on("click", function(){
    	if($(".bskt-delivery-main__block").hasClass("open")){
    		$(".bskt-delivery-main__block").removeClass("open");
    		$(this).text("Показать товары в корзине")
    	}
    	else{
    		$(".bskt-delivery-main__block").addClass("open");
    		$(this).text("Скрыть товары в корзине")
    	}
    })
    $(".city-click").on("click", function(){
    	var city = $(this).text();
    	$(".bskt-delivery-page__city-change_value").text("г. " + city);
    	$(".bskt-delivery-page__city-change_modal").removeClass("open");
    	$("body").removeClass("modal-open");
    	$("body").removeClass("overlay-open");
    })
    $(".confirm-click").on("click", function(){
    	$(".bskt-delivery-page__city-change_modal").removeClass("open");
    	$("body").removeClass("modal-open");
    	$("body").removeClass("overlay-open");
    	if ($(".input-data").val() != 0){
    		var chooseCity = $(".input-data").val();
    		$(".bskt-delivery-page__city-change_value").text("г. " + chooseCity)
    	}
    })
    $(".method-click").on("click", function(){
        $(".bskt-delivery-page__method-block").find(".method-dropdown").removeClass('open');
        $(".bskt-delivery-page__method-block").find(".method-click").removeClass('active');
        $(this).addClass("active");
        $(this).parent().next().next().next().addClass("open");
    })
    $(".punkt-click").on("click",function(){
        $(".punkt-click").removeClass("active");
        $(this).addClass("active");
    })
    $(".bskt-footer-pay-page__icon-question").on("click", function(){
        $(".bskt-footer-pay-page__block-for-icon-question").addClass("open");
        $(".allClose").addClass("open");
    })
    $(".blockHidden").on("click", function(){
        $(".allClose").removeClass("open");
        $(".bskt-footer-pay-page__block-for-icon-question").removeClass("open");
    });
    $(".bskt-footer-pablickContract_modal-main_scroll-bottom").on("click", function(){
        var scroll_top = $(".bskt-footer-pablickContract_modal-main-block").scrollTop();
        var scrollValue = pablickContractModalMainBlock + scroll_top;
        $(".bskt-footer-pablickContract_modal-main_scroll-top").addClass("visible");
        $(".bskt-footer-pablickContract_modal-main-block").animate({scrollTop:scrollValue}, 200);
    });
    $(".bskt-footer-pablickContract_modal-main_scroll-top").on("click", function(){
        var scroll_top = $(".bskt-footer-pablickContract_modal-main-block").scrollTop();
        var scrollValue = scroll_top - pablickContractModalMainBlock;
        $(".bskt-footer-pablickContract_modal-main-block").animate({scrollTop:scrollValue}, 200);
        if(scrollValue < 0){
            $(".bskt-footer-pablickContract_modal-main_scroll-top").removeClass("visible");
        }
    });
    $(".bskt-footer-pablickContract_modal-main-block").scroll(function(){
        if($(".bskt-footer-pablickContract_modal-main-block").scrollTop() > 0){
            $(".bskt-footer-pablickContract_modal-main_scroll-top").addClass("visible");
        }
        else{
            $(".bskt-footer-pablickContract_modal-main_scroll-top").addClass("visible");
        }
    });

});