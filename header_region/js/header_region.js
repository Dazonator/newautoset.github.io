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
     $(".header-top-region__modal-main_list-checkName").on("click", function () {
        var total =  $(this).text()
        $(".header-top-region__btn-block_link").text(total);
        $(".header-top-region__modal-header_city").text(total);
    });
    $(".header-top-region__modal-footer_ok").on("click", function(){
        $('body').removeClass("modal-open");
        $('body').removeClass("overlay-open");
        $('.header-top-region__modal').removeClass("open");
    })
});