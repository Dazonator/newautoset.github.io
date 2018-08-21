 $(document).ready(function () {
 	$(".js-about-tab").on("click", function(){
        $(".js-about-tab").removeClass("active");
        $(this).addClass("active");
        var data = $(this).attr("data");
        $(".goods-about__content-item").addClass("hidden");
        var find_desc = $("body").find("div [data='" + data +"-block']");
        find_desc.removeClass("hidden");
        var top_desc = find_desc.offset().top;
        $("html,body").animate({scrollTop:top_desc - 20}, 600);
    });
    $(".js-anchor").on("click", function(){
      	var val = $(this).attr("href");
		var href = val.substring(1, val.length);
		$(".js-about-tab").removeClass("active");
		$("body").find("div [data=" + href +"]").addClass("active");
		$(".goods-about__content-item").addClass("hidden");
        var find_block = $("body").find("div [data='" + href +"-block']");
        find_block.removeClass("hidden");
        var top = find_block.offset().top;
        console.log(top);
        $("html,body").animate({scrollTop:top - 20}, 600);
    });
 })