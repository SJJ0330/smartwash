

$(function () {
    $("#aide").click(function () {
        $("#show").modal("show");
        $(".first").show();
        $(".second").hide();
        $(".third").hide();

    });


    // 模态框内容显示切换
    $(".s-row").click(function () {
        $(".first").hide();
        $(".second").removeClass("sm-hide").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = " + a + "]").show();
    });

    $(".q-row").click(function () {
        $(".second").hide();
        $(".third").removeClass("sm-hide").hide();
        var b = $(this).attr("data-b");
        $("div[data-c = " + b + "]").show();
    });

    $(".sec").click(function(){
        $(".first").show();
        $(".second").hide();
        $(".third").hide();
    })

    $(".thi").click(function(){
        $(".second-level").show();
        $(".first").hide();
        $(".third").hide();
    })







    $(window).scroll(function(){

    if($(window).scrollTop()>100){
        $(".service").css({"left":"-90px", "opacity":".3"})
    }else{
        $(".service").css({"left":"-22px", "opacity":"1"})
    }

    });

})



function isBrowser() {
    var userAgent = navigator.userAgent;
    //微信内置浏览器
    // if(userAgent.match(/MicroMessenger/i) == 'MicroMessenger') {
    //     console.log( "MicroMessenger");
    // }
    //and
    if(userAgent.match(/QQ/i) == 'QQ') {
        console.log( "QQ");
        alert("and")
        $(".solog").css("margin-bottom","0")
    }
    //ios
    else{
        alert("else")
        $(".solog").css("margin-bottom","40px")
    }
    
}

// isBrowser()