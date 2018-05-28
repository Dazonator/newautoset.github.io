 $(document).ready(function () {
 	$(".mobile-menu-show").on('click', function(){
 		if($('.header-mobile-modalmenu__modal').hasClass('open')){
 			$('.header-mobile-modalmenu__modal').removeClass('open')
 			$('.mobile-menu-show').removeClass('open')
 			$('.header-mobile-modalmenu').removeClass('open')
            $('body').removeClass('mobilemenu-open')
 		}
 		else{
 			$('.header-mobile-modalmenu__modal').addClass('open')
 			$('.mobile-menu-show').addClass('open')
 			$('.header-mobile-modalmenu').addClass('open')
            $('body').addClass('mobilemenu-open')
 		}
 		if($('.allClose').hasClass('open')){
 			$('.allClose').removeClass('open')
 		}
 		else{
 			$('.allClose').addClass('open')
 		}
 	});
 	$(".closer").on('click', function(){
 		$('.header-mobile-modalmenu__modal').removeClass('open');
 		$('.allClose').removeClass('open');
 		$('.mobile-menu-show').removeClass('open')
 		$('.header-mobile-modalmenu').removeClass('open')
        $('body').removeClass('mobilemenu-open')
 		$(".header-mobile-modalmenu__modal_submenu").css({
	        "left" : "100%"
	    });
 	});
    $(".header-mobile-modalmenu__modal-back").on("click", function(){
        $(".header-mobile-modalmenu__modal_submenu").css({
            "left" : "100%"
        });
    });
    
    $(".header-mobile-modalmenu__modal-submenu-btnclick").on("click", function(){
        var data = $(this).attr("data")
        $("body").find("div [data='" + data +"-submenu']").css({
            "left" : "0%"
        })
        $('body,html').animate({scrollTop:0}, 100);
    })
}); 
