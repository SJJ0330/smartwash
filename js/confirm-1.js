

$(function(){

    $(".line").click(function(){
        $(".line").removeClass("line-active");
        $(this).addClass("line-active")
    })

    $(".line").click(function(){
        $(".price-sum").removeClass("hide").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = "+a+"]").show();
    });











})