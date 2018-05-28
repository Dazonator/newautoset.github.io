 $(document).ready(function () {
    var win = $(this);
    $(".tire-click-for-hover").on("click", function(){
        if (win.width() <= 1199) {
            $(this).parents().addClass("hover-open");
            $(this).find(".tirecart-hover-body").css({
                "display" : "block"
            });
            $(this).find(".tirecart-hover-body").addClass("open");
            $(".allClose").addClass("open");
        };
    });
    $(".click-for-hover-cross").on("click", function(){
        if (win.width() <= 1199) {
            $(this).parents().addClass("hover-open");
            $(this).next().css({
                "display" : "block"
            });
            $(this).next().addClass("open");
            $(".allClose").addClass("open");
        };
    });
    $(".allClose").on("click", function(){
        $('body').find(".tirecart-hover-body").css({
            "display" : "none"
        });
        $('body').find(".tirecart-hover-body").removeClass("open");
        $(".allClose").removeClass("open");
        $('html').find(".hover-open").removeClass("hover-open");
        $('html').removeClass("hover-open");
    });
    $(".tirecart-hover-body_close").on('click', function(){
        $(this).parent().css({
            "display" : "none"
        });
        $('body').find(".tirecart-hover-body").removeClass("open");
        $(".allClose").removeClass("open");
        $('html').find(".hover-open").removeClass("hover-open");
        $('html').removeClass("hover-open");
    });
    $(window).on('resize', function(){
        if (win.width() >= 1200) {
            $('body').find(".tire-click-for-hover").removeClass("tire-click-for-hover");
            $('body').find(".click-for-hover-cross").removeClass("click-for-hover-cross");
            $('body').find(".tirecart-hover-body").removeAttr("style");
            $('body').find(".tirecart-hover-body").removeClass("open");
            $(".allClose").removeClass("open");
            $('html').find("div.hover-open").removeClass("hover-open");
            $('html').removeClass("hover-open");
        }
        else{
            $('body').find(".tirecart-hover-body").parent().addClass("tire-click-for-hover")
        }
    });
   
    $(document).on('scroll', function(){
        var scroll_top = $(document).scrollTop();
        var scroll_bottom = $(window).scrollTop() + $(window).height();
        var tirecart_height = $(".tirecart").outerHeight();
        var tirecart_offset = $(".tirecart.hover-open").offset().top;
        var scroll_vallue_top = tirecart_offset + 50;
        var scroll_vallue_bottom = tirecart_offset;
        if (win.width() <= 1199) {
            if((Number(scroll_top) > Number(scroll_vallue_top)) || (Number(scroll_bottom) < Number(tirecart_offset))){
                $('body').find(".tirecart-hover-body.open").css({
                    "display" : "none"
                });
                $('html').find("div.hover-open").removeClass("hover-open");
                $('html').removeClass("hover-open");
                $('body').find(".tirecart-hover-body.open").removeClass("open");
                $(".allClose").removeClass("open")
            }
        };
    })

   
    
   
    
           
   
    
});     