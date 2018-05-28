$(document).ready(function () {
    $(".section-info__btn").on("click", function(){
        if ($(".columns_2").hasClass("open")){
            $(".columns_2").removeClass("open");
            $(".section-info__btn").removeClass("open");
            $(".section-info__btn").text("Показать информацию");
            $(".columns_2 p").addClass("hidden-xs");
            $(".columns_2 p:eq(0)").removeClass("hidden-xs");
            $(".columns_2 p:eq(1)").removeClass("hidden-xs");
        }
        else{
            $(".columns_2").addClass("open");
            $(".section-info__btn").addClass("open");
            $(".section-info__btn").text("Скрыть информацию");
            $(".columns_2 p").removeClass("hidden-xs");
        }
    })
});