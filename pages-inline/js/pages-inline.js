$(document).ready(function () {
    $(window).load(function(){
        if($(".pages-inline__body").height() > 19){
                $(".pages-inline__btn").css({
                    "display" : "block"
                });
                $(".pages-inline__body").addClass("hidden");
                
                $(".pages-inline__body").css({
                    "overflow" : "hidden",
                    "max-height" : "20px"
                })
            }
            else{
                $(".pages-inline__btn").css({
                    "display" : "none"
                });
            }
    })
    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() <= 1920) {
            if($(".pages-inline__body").height() > 19){
                $(".pages-inline__btn").css({
                    "display" : "block"
                });
                
                $(".pages-inline__body").addClass("hidden");
                
                $(".pages-inline__body").css({
                    "overflow" : "hidden",
                    "max-height" : "20px"
                })
            }
            else{
                $(".pages-inline__btn").css({
                    "display" : "none"
                });
                
            }
        }
        else{
            $(".pages-inline__body").removeClass("hidden")
            $(".pages-inline__body").css({
                "overflow" : "visible",
                "max-height" : "100%"
            })
        }

        if($(".pages-inline__body").hasClass("hidden")){
            $(".pages-inline__svg").css({
                "transform" : "rotate(0deg)"
            })
        }
        else{
            $(".pages-inline__svg").css({
                "transform" : "rotate(180deg)"
            })
        }
    });
    $(".pages-inline__btn").on("click", function(){
        if($(".pages-inline__body").hasClass("hidden")){
            $(".pages-inline__body").removeClass("hidden");
             $(".pages-inline__body").css({
                "overflow" : "visible",
                "max-height" : "100%"
            })
            $(".pages-inline__svg").css({
                "transform" : "rotate(180deg)"
            })
        }
        else{
            $(".pages-inline__body").addClass("hidden");
            $(".pages-inline__body").css({
                "overflow" : "hidden",
                "max-height" : "20px"
            })
            $(".pages-inline__svg").css({
                "transform" : "rotate(0deg)"
            })
        }
    })
    $(window).ready(function(){
        if($(".pages-inline__body").height() > 19){
            $(".pages-inline__btn").css({
                "display" : "block"
            });
            $(".pages-inline__body").addClass("hidden");
            
            $(".pages-inline__body").css({
                "overflow" : "hidden",
                "max-height" : "20px"
            })
        }
        else{
            $(".pages-inline__btn").css({
                "display" : "none"
            });
        }
    })
});