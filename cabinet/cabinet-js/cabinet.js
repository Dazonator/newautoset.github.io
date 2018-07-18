 $(document).ready(function () {
    $(".js-open-modal").on("click", function(){
        $(".js-select-visual").removeClass("open");
    })
    $(".js-close-modal").on("click", function(){
        $(".modal").removeClass("open");
    })
    $(".js-mob-menu-btn").on("click", function(){
        if($(this).parent().next().hasClass("open")){
            $(this).parent().next().slideUp("easeInCubic");
            $(this).parent().next().removeClass("open");
            $(this).removeClass("open");
            $(".allClose").removeClass("open");
        }
        else{
            $(this).parent().next().slideDown("easeInCubic");
            $(this).parent().next().addClass("open");
            $(this).addClass("open");
            $(".allClose").addClass("open");
        }
    })
     $(".allClose").on("click", function(){
        $("body").find(".open").removeClass("open");
        $(this).removeClass("open");
        $(".js-mob-menu-block").slideUp("easeInCubic")
     })

    // ------------Страница ВХОДА И РЕГИСТРАЦИИ-------------------------
    $('.js-login').on('click', function() {
        if( $(".login-email").val() == ''){
            $(".login-email").addClass('empty-field');
            $(".login-email").addClass('wrong-password');
            $(".wrong-password_text").removeClass("hidden");
        }
        else{
            $(".login-email").removeClass('empty-field');
            $(".login-email").removeClass('wrong-password');
            $(".wrong-password_text").addClass("hidden");
        };
        if( $(".login-password").val() == ''){
            $(".login-password").addClass('empty-field');
        }
        else{
            $(".login-password").removeClass('empty-field');
        };
        if( ($(".login-email").val() == '') || ($(".login-password").val() == '')){
            $(".cabinet-logIn__tab-entry_description").addClass('hidden');
            $(".cabinet-logIn__tab-entry_wrong").removeClass("hidden");
        }
        else{
            $(".cabinet-logIn__tab-entry_description").removeClass('hidden');
            $(".cabinet-logIn__tab-entry_wrong").addClass("hidden");
            $(".cabinet-logIn__tab-entry_recovery").addClass("hidden");
            $(".cabinet-logIn__tab-entry_sent-password").addClass("hidden");
        };
    })
    $(".js-forgotpassword").on("click",function(){
        $(this).addClass("hidden");
        $(".login-email").removeClass('empty-field');
        $(".login-email").removeClass('wrong-password');
        $(".login-email").val('');
        $(".wrong-password_text").addClass("hidden");
        $(".cabinet__entry-btn").addClass("hidden");
        $(".js-get-password").removeClass("hidden");
        $(".login-password").prev().addClass("hidden");
        $(".login-password").addClass("hidden");
        $(".login-password").removeClass("empty-field");
        $(".cabinet-logIn__tab-entry_description").addClass('hidden');
        $(".cabinet-logIn__tab-entry_recovery").removeClass("hidden");
    });
    $(".js-get-password").on("click",function(){
        $(".cabinet__entry-btn").removeClass("hidden");
        $(this).addClass("hidden");
        $(".login-email").val('');
        $(".login-password").val('');
        $(".js-forgotpassword").removeClass("hidden");
        $(".login-password").prev().removeClass("hidden");
        $(".login-password").removeClass("hidden");
        $(".cabinet-logIn__tab-entry_description").addClass('hidden');
        $(".cabinet-logIn__tab-entry_sent-password").removeClass("hidden");
    });
    $(".js-tab-click").on("click", function(){
        $(".cabinet-logIn__tab-wrapper").removeClass("active");
        $(this).addClass("active");
        $(".cabinet__input").removeClass("empty-field");
        var data = $(this).attr("data");
        $(".cabinet-logIn__block-wrapper").addClass("hidden");
        $("body").find("div [data='" + data +"-block']").removeClass("hidden");
    });
    $(".js-registration").on("click", function(){
        if( $(".js-control1").val() == ''){
            $(".js-control1").addClass('empty-field');
        }
        else{
            $(".js-control1").removeClass('empty-field');
        };
        if( $(".js-control2").val() == ''){
            $(".js-control2").addClass('empty-field');
        }
        else{
            $(".js-control2").removeClass('empty-field');
        };
        if( $(".js-control3").val() == ''){
            $(".js-control3").addClass('empty-field');
        }
        else{
            $(".js-control3").removeClass('empty-field');
        };
        if(($(".js-control1").val() !== '') && ($(".js-control2").val() !== '') && ($(".js-control3").val() !== '')){
            $(".cabinet-logIn__tab-entry_welcome").addClass("hidden");
            $(".cabinet-logIn__tab-registration_ready").removeClass("hidden");
            $(".cabinet-logIn__tab-registration_inputs").find("label").addClass("hidden");
            $(".cabinet-logIn__tab-registration_inputs").find("input").addClass("hidden");
            $(".cabinet-logIn__tab-registration_inputs").find("input").addClass("hidden");
            $(".cab-reg-ready_password").removeClass("hidden");
            $(".cabinet-logIn__tab-registration_button").find("p").addClass("hidden");
            $(this).addClass("hidden");
            $(".js-wellDone").removeClass("hidden");
        }
    })
    $(".cabinet__input-tel").focusin(function(){
        $(this).prev(".cabinet__label").addClass("focusin");
    });


    // --------Модальное окно ПУБЛИЧНЫЙ ДОГОВОР кнопки прокрутки-------------------

    $(".cab-reg-modal-main_scroll-bottom").on("click", function(){
        var pablickContractModalMainBlock = $(".cab-reg-modal-main-block").height();
        var scroll_top = $(".cab-reg-modal-main-block").scrollTop();
        var scrollValue = pablickContractModalMainBlock + scroll_top;
        $(".cab-reg-modal-main_scroll-top").removeClass("hidden");
        $(".cab-reg-modal-main-block").animate({scrollTop:scrollValue}, 200);
    });
    $(".cab-reg-modal-main_scroll-top").on("click", function(){
        var pablickContractModalMainBlock = $(".cab-reg-modal-main-block").height();
        var scroll_top = $(".cab-reg-modal-main-block").scrollTop();
        var scrollValue = scroll_top - pablickContractModalMainBlock;
        $(".cab-reg-modal-main-block").animate({scrollTop:scrollValue}, 200);
        if(scroll_top <= pablickContractModalMainBlock){
            $(".cab-reg-modal-main_scroll-top").addClass("hidden");
        }
    });
    $(".cab-reg-modal-main-block").scroll(function(){
        var scroll_top = $(".cab-reg-modal-main-block").scrollTop();
        if(scroll_top > 0){
            $(".cab-reg-modal-main_scroll-top").removeClass("hidden");
        }
        else{
            $(".cab-reg-modal-main_scroll-top").addClass("hidden");
        }
    });
    // -------------Личные данные-------------------
    // -------------Личные данные-------------------

    $(".cabinet-mydata__entity-label-yes").on("click", function(){
        $(".cabinet-mydata__entity-block").slideDown("easeInCubic");
    });
     $(".cabinet-mydata__entity-label-no").on("click", function(){
         $(".cabinet-mydata__entity-block").slideUp("easeInCubic");
    });
    $(".js-cabinet-input").keypress(function(e){
        if((e.keyCode==13) && ($(this).val() !== '')) {
            var data = $(this).val();
            $(this).addClass("hidden");
            $(this).next(".cabinet__from-input-block").removeClass("hidden");
            $(this).next(".cabinet__from-input-block").find(".cabinet__from-input-text").text(data);
        }
        if((e.keyCode==13) && ($(".js-cabinet-input:password").val() !== '')){
            var password_length = $(this).val().length;
            var password = "";
            for (i = 0; i < password_length; i++) {
                var star = "*";
                password = password + star;
            }
            $(this).next(".cabinet__from-input-block").find(".cabinet__from-input-text").text(password);
        }
    });
    $(".js-cabinet-input").focusout(function(){
        if($(this).val() !== ''){
            var data = $(this).val();
            $(this).addClass("hidden");
            $(this).next(".cabinet__from-input-block").removeClass("hidden");
            $(this).next(".cabinet__from-input-block").find(".cabinet__from-input-text").text(data);
        }
    });
     $(".js-cabinet-input:password").focusout(function(){
            var password_length = $(this).val().length;
            var password = "";
            for (i = 0; i < password_length; i++) {
                var star = "*";
                password = password + star;
            }
            $(this).next(".cabinet__from-input-block").find(".cabinet__from-input-text").text(password);
    });
    $(".js-cabinet__from-input-icon").on("click", function(){
        $(this).parent().addClass("hidden");
        $(this).parent().prev(".js-cabinet-input").removeClass("hidden");
        $(this).parent().prev(".js-cabinet-input").focus();
    });
    // ------------------------ДОбавить адрес---------------
    // ------------------------ДОбавить адрес---------------
    // ------------------------ДОбавить адрес---------------
    $(".js-add").on("click", function(){
        $(this).parent().prev(".js-add-block").slideDown("easeInCubic");
    });
    $(".js-cabinet-save").on("click", function(){
        $(".js-add-block").slideUp(0);
    });
    // -----------Пункты выдачи-------------------
    // -----------Пункты выдачи-------------------
    // -----------Пункты выдачи-------------------
    $(".js-add").on("click", function(){
        $(this).parent(".cabinet-myexibition__add-myexibition").addClass("hidden");
    });
    $(".js-cabinet-myexibition-save").on("click", function(){
        $(".cabinet-myexibition__item").removeClass("hidden");
        $(".cabinet-myexibition__add-myexibition-block").slideUp(0);
    });
    $(".js-myexibition-change").on("click", function(){
        $(".cabinet-myexibition__add-myexibition-block").removeClass("hidden");
        $(".cabinet-myexibition__add-myexibition-block").slideDown("easeInCubic");
    })







});