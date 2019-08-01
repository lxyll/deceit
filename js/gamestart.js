$(document).ready(function () {
    $(".tab li").click(function () {
        $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
        $(".status").hide().eq($(this).index()+1).show();
    });
});


$(document).ready(function () {
    $(".next span").click(function () {
        if (!$(".tab li").is(".cur")) {
            $(".hint").animate({
                left: '5.2rem'
            });
            setTimeout(function () {
                $(".hint").animate({
                    left: '25rem'
                });
                setTimeout(function () {
                    $(".hint").css({
                        left: '-15rem'
                    });
                }, 1000);
            }, 2000);
            return false;
        }
        location.href = "deal.html";
    });
});