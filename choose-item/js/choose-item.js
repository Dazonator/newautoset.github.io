 $(document).ready(function () {
    var win = $(this);
    $(".item-click-for-hover").on("click", function(){
        if (win.width() <= 1199) {
            $(this).parents().addClass("hover-open");
            $(this).find(".cartitem-hover-body").css({
                "display" : "block"
            });
            $(this).find(".cartitem-hover-body").addClass("open");
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
        $('body').find(".cartitem-hover-body").css({
            "display" : "none"
        });
        $('body').find(".cartitem-hover-body").removeClass("open");
        $(".allClose").removeClass("open");
        $('html').find(".hover-open").removeClass("hover-open");
        $('html').removeClass("hover-open");
    });
    $(".cartitem-hover-body_close").on('click', function(){
        $(this).parent().css({
            "display" : "none"
        });
        $('body').find(".cartitem-hover-body").removeClass("open");
        $(".allClose").removeClass("open");
        $('html').find(".hover-open").removeClass("hover-open");
        $('html').removeClass("hover-open");
    });
    $(window).on('resize', function(){
        if (win.width() >= 1200) {
            $('body').find(".item-click-for-hover").removeClass("item-click-for-hover");
            $('body').find(".click-for-hover-cross").removeClass("click-for-hover-cross");
            $('body').find(".cartitem-hover-body").removeAttr("style");
            $('body').find(".cartitem-hover-body").removeClass("open");
            $(".allClose").removeClass("open");
            $('html').find("div.hover-open").removeClass("hover-open");
            $('html').removeClass("hover-open");
        }
        else{
            $('body').find(".cartitem-hover-body").parent().addClass("item-click-for-hover")
        }
    });
   
    $(document).on('scroll', function(){
        var scroll_top = $(document).scrollTop();
        var scroll_bottom = $(window).scrollTop() + $(window).height();
        var cartitem_height = $(".cartitem").outerHeight();
        var cartitem_offset = $(".cartitem.hover-open").offset().top;
        var scroll_vallue_top = cartitem_offset + 50;
        var scroll_vallue_bottom = cartitem_offset;
        if (win.width() <= 1199) {
            if((Number(scroll_top) > Number(scroll_vallue_top)) || (Number(scroll_bottom) < Number(cartitem_offset))){
                $('body').find(".cartitem-hover-body.open").css({
                    "display" : "none"
                });
                $('html').find("div.hover-open").removeClass("hover-open");
                $('html').removeClass("hover-open");
                $('body').find(".cartitem-hover-body.open").removeClass("open");
                $(".allClose").removeClass("open")
            }
        };
    })

   
    
   
    
           
   
    
});     