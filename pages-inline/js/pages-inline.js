$(document).ready(function () {
    var crumbs_body = $(".pages-inline__body"); 
    var crumbs_btn = $(".pages-inline__btn");
    function crumbs (){
         if(crumbs_body.height() > 20){
            crumbs_btn.removeClass("hidden");
            crumbs_body.addClass("maxheight");
        };
    }
    crumbs ();
    crumbs_btn.on("click", function(){
        if(crumbs_body.hasClass("maxheight")){
            crumbs_body.removeClass("maxheight");
        }
        else{
            crumbs_body.addClass("maxheight");
        }
    });
    $(window).on('resize', function(){
        crumbs ();
    });
});
