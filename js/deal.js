$(document).ready(function () {
    var n = 0;
    var lengths = $('.person ul li').length; //得知有几个li
    // console.log(lengths);
    $('.next').click(function () {
        n += 1;
        $('.person ul li').eq(n).show().siblings('li').hide();
        if (n == lengths - 1) {
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

    var image = ['r1.jpg', 'r2.jpg', 'r2-1.jpg', 'r2-2.jpg', 'r2-3.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r5-1.jpg', 'r5-2.jpg', 'r5-3.jpg', 'r6.jpg'];

    function getArrRandomly(arr) {
        var len = arr.length;
        //首先从最大的数开始遍历，之后递减
        for (var i = len - 1; i >= 0; i--) {
            //随机索引值randomIndex是从0-arr.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1));
            //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
            var itemIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemIndex;
        }
        //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）
        return arr;
    }
    getArrRandomly(image);


    $('.showRank span').eq(0).on("click", function () { //生成唯一随机图


        // console.log(getArrRandomly(image));
        // console.log(image);随机以后的image
        localStorage.setItem("images", image);

        // number = Math.floor(Math.random() * image.length);
        images = "<img src='img/" + image[num] + "'>";
        // console.log(image[num]);

        // console.log($('#a').children().length);
        // $('.imgBox').eq(0).append(images);
        if (num < 12) {
            if ($('.imgBox').eq(num).children().length <= 2) {
                $('.imgBox').eq(num).append(images);
            }
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