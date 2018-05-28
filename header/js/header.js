$(document).ready(function () {
     $(document).on('scroll', function(){
        var scroll_top = $(document).scrollTop();
        if(Number(scroll_top) > 200){
            $('.header-top.header-top-hidden').css({
                "display" : "block"
            });
            $(".header-logoBlock__navLinks-contacts").removeClass("open");
            $(".header-logoBlock__navLinks-link").removeClass("open");
            $(".header-logoBlock__navLinks-contacts_body").removeClass("open");
        }
        else{
            $('.header-top.header-top-hidden').css({
                "display" : "none"
            });
            $(".header-top-info-for-buyer__body-hidden").removeClass("open");
            $(".header-top-info-for-buyer__link").removeClass("open");
            $(".header-top-info-for-buyer").removeClass("open");
        }
    })
});