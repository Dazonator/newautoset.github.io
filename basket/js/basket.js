$(document).ready(function () {
    if($("div").hasClass("bskt-disabled")){
        $(".bskt-disabled").find(".radio-choose").removeClass("method-click");
    }
    else{
        $(".radio-choose").addClass("method-click");
    }
    
    
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
    })
    $(".confirm-click").on("click", function(){
    	if ($(".input-data").val() != 0){
    		var chooseCity = $(".input-data").val();
    		$(".bskt-delivery-page__city-change_value").text("г. " + chooseCity)
    	}
    })
    $(".modal-remove").on("click", function(){
        $("body").removeClass("modal-open");
        $("body").removeClass("overlay-open");
        $(".modal").removeClass("open");
        $(".input-data").val("");
    })
    $(".method-click").on("click", function(){
        $(".bskt-delivery-page__method-block").find(".method-dropdown").stop().slideUp("easeInQuad");
        $(".bskt-delivery-page__method-block").find(".method-dropdown").removeClass("open");
        $(this).parent().next().next().next().addClass("open");
        $(this).parent().next().next().next().stop().slideDown("easeInQuad");
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
        var pablickContractModalMainBlock = $(".bskt-footer-pablickContract_modal-main-block").height();
        var scroll_top = $(".bskt-footer-pablickContract_modal-main-block").scrollTop();
        var scrollValue = pablickContractModalMainBlock + scroll_top;
        $(".bskt-footer-pablickContract_modal-main_scroll-top").addClass("visible");
        $(".bskt-footer-pablickContract_modal-main-block").animate({scrollTop:scrollValue}, 200);
    });
    $(".bskt-footer-pablickContract_modal-main_scroll-top").on("click", function(){
        var pablickContractModalMainBlock = $(".bskt-footer-pablickContract_modal-main-block").height();
        var scroll_top = $(".bskt-footer-pablickContract_modal-main-block").scrollTop();
        var scrollValue = scroll_top - pablickContractModalMainBlock;
        $(".bskt-footer-pablickContract_modal-main-block").animate({scrollTop:scrollValue}, 200);
        if(scroll_top <= pablickContractModalMainBlock){
            $(".bskt-footer-pablickContract_modal-main_scroll-top").removeClass("visible");
        }
    });
    $(".bskt-footer-pablickContract_modal-main-block").scroll(function(){
        var scroll_top = $(".bskt-footer-pablickContract_modal-main-block").scrollTop();
        if(scroll_top > 0){
            $(".bskt-footer-pablickContract_modal-main_scroll-top").addClass("visible");
        }
        else{
            $(".bskt-footer-pablickContract_modal-main_scroll-top").removeClass("visible");
        }
    });

});