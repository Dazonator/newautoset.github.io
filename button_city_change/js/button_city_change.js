$(document).ready(function () {
    $(".city-click").on("click", function(){
    	var city = $(this).text();
    	$(".city-change__value").text("г. " + city);
    })
    $(".confirm-click").on("click", function(){
    	if ($(".input-data").val() != 0){
    		var chooseCity = $(".input-data").val();
    		$(".city-change__value").text("г. " + chooseCity)
    	}
    })
    $(".modal-remove").on("click", function(){
        $("body").removeClass("modal-open");
        $("body").removeClass("overlay-open");
        $(".modal").removeClass("open");
        $(".input-data").val("");
    })
});