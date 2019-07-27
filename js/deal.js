$(document).ready(function () {
    var n = 0;
    var lengths = $('.person ul li').length; //得知有几个li
    // console.log(lengths);
    $('.next').click(function () {
        n += 1;
        $('.person ul li').eq(n).show().siblings('li').hide();
        if (n == lengths-1) {
            $('.showRank span').eq(1).attr('id', 'hides');
            $('.showRank span').eq(2).removeAttr('id', 'hides');
        }
        $('.showRank span:first-child').text('显示身份');
        $('.imgBox img:first-child').removeClass('hides');
        // location.reload(a());
    });

});



$(document).ready(function () {
    var num = 0;

    $('.showRank span').eq(0).on("click", function () { //生成唯一随机图
        
        var image = ['r1.jpg', 'r2.jpg', 'r2-1.jpg', 'r2-2.jpg', 'r2-3.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r5-1.jpg', 'r5-2.jpg', 'r5-3.jpg', 'r6.jpg'];
        number = Math.floor(Math.random() * image.length);
        images = "<img src='img/" + image[number] + "'>";
        
        // console.log($('#a').children().length);
            // $('.imgBox').eq(0).append(images);

        if ($('.imgBox').eq(num).children().length <= 2) {
            $('.imgBox').eq(num).append(images);
        }

        // setTimeout(function () {
        //     location.reload();
        // }, 3000);
        num += 1;
    });



    $('.showRank span').eq(0).click(function () { //按钮显示
        var texts = $('.showRank span:first-child').text();
        if (texts == "显示身份") {
            $('.imgBox img:first-child').addClass('hides');
            $('.showRank span:first-child').text('隐藏身份');
            return true;
        }
        if (texts == "隐藏身份") {
            $('.imgBox img:first-child').removeClass('hides');
            $('.showRank span:first-child').text('显示身份');
            return true;
        }
        // setTimeout(function () {
        //     location.reload();
        // }, 3000);
    });


});


$(document).ready(function () {
    $('.begin').click(function () {
        location.href = "march.html";
    });
});