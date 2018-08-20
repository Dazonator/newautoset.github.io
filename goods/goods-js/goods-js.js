 $(document).ready(function () {
 	$(".js-about-tab").on("click", function(){
        $(".js-about-tab").removeClass("active");
        $(this).addClass("active");
        var data = $(this).attr("data");
        $(".goods-about__content-item").addClass("hidden");
        $("body").find("div [data='" + data +"-block']").removeClass("hidden");
    });
    // $(".close-cross").on("click", function(){
    // 	$(this).parent().parent().hide();
    // })
 })