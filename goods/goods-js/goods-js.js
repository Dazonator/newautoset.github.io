 $(document).ready(function () {
 	$(".js-about-tab").on("click", function(){
        $(".js-about-tab").removeClass("active");
        $(this).addClass("active");
        var data = $(this).attr("data");
        $(".goods-about__content-item").addClass("hidden");
        var find_desc = $("body").find("div [data='" + data +"-block']");
        find_desc.removeClass("hidden");
    });
    $(".js-anchor").on("click", function(){
      	var val = $(this).attr("href");
		var href = val.substring(1, val.length);
		$(".js-about-tab").removeClass("active");
		$("body").find("div [data=" + href +"]").addClass("active");
		$(".goods-about__content-item").addClass("hidden");
        var find_block = $("body").find("div [data='" + href +"-block']");
        find_block.removeClass("hidden");
        var top = $(".goods-about").offset().top;
        console.log(top);
        $("html,body").animate({scrollTop:top - 20}, 600);
    });
    $(window).load(function(){
        if($("body").hasClass("touch")){
            $("body").find(".js-hover").addClass("js-click-hover");
            $("body").find(".js-hover").removeClass("js-hover");
            $(".js-click-hover").on("click", function(){    
                var xsTarget = $(this);
                if (xsTarget.hasClass('open')) {
                    xsTarget.removeClass('open');
                 }
                else {
                    $(".js-click-hover").removeClass('open');
                    setTimeout(function() {
                        xsTarget.addClass('open');
                    }, 150);
                }
            })
        }
    });
    $(document).mouseup(function (e){
        var div = $(".js-click-hover");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass("open");
        };
        e.stopPropagation();
    });
    $(".js-close-cross").on("click", function(e){
        e.stopPropagation();
        $(".open").removeClass("open");
    })
 })