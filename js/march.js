$(document).ready(function () { //收缩菜单
    function show(day) {
        $(day).click(function () {
            // alert(1)
            $(this).nextAll().slideToggle();

            if ($(this).children().eq(0).hasClass("rotate")) {
                // console.log($(this).children().eq(0));
                $(this).children().eq(0).removeClass("rotate").addClass("rotate1");
            } else {
                $(this).children().eq(0).removeClass("rotate1").addClass("rotate");
            }
        });
    }
    show('.day');
    show('.night');
    show('.daytime');
});

// 得到可视区的高度，并设置高度
$(document).ready(function () {
    function heights(heightss) {
        var height = $(document.body).height();
        // var height = $(window).scrollTop();
        $(heightss).css({
            height: height
        });

        $(heightss).css({
            height: height
        });
    }
    heights('.killSelects');
    heights('.seerChecks');
    heights('.witchSelects');
});

// console.log($(window).height());


$(document).ready(function () { //添加随机人物 通用
    var num = 0;
    var images = localStorage.getItem("images");
    var imgarr = images.split(',');
    // console.log(imgarr);
    if (num < 12) {
        for (var i = 0; i < 12; i++) {
            image = "<img src='img/" + imgarr[i] + "'>";
            // console.log(image);
            $('.killSelect li').eq(i).append(image); //添加狼人页的随机图片
            $('.seerCheck li').eq(i).append(image); //添加预言家页面
            $('.witchSelect li').eq(i).append(image); //添加女巫页面
        }
    }
    // $(".killSelect li img").prev().hide();
    $(".killSelect li [src^='img/r2']").prev().hide(); //非狼人 隐藏
    $(".seerCheck li [src^='img/r3']").prev().hide(); //非预言家 隐藏
    $(".witchSelect li [src^='img/r1']").prev().hide(); //非女巫 隐藏
    // var a = $(".killSelect li [src^='img/r2']");
    // if (a == false) {
    //     b = "<img src='/img/bg0.jpg'>";
    //     $('.killSelect li').append(b);
    // }
    // $(".killSelect li [src^='img/r2']");//取得狼人的身份
});



// 狼人选择页面的操作  开始

$(document).ready(function () { //点击狼人杀人事件
    $('#kill').on('click', function () {
        setTimeout(function () {
            $('#kill').addClass('color');
        }, 2000);
        $('.header').addClass('hides');
        $('.firstDiv').addClass('hides');
        $('.killSelects').removeClass('hides');
        // console.log($('#kill').is('.color'));
        if ($('#kill').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.killSelects').addClass('hides');
        }
    });
});


$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];
    $('.killSelect li').on('click', function () {
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.killSelect li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.killSelect i').size(); //判断有几个i
        // console.log(num);

        arr.push(index);
        // console.log(arr);
        if (li > 1) {
            // alert(1)
            // var a = arr[num];
            // console.log(a);
            // console.log($('.killSelect li').eq(arr[num]).children('i'));
            $('.killSelect li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件
        }
        num += 1;
    });

});

$(document).ready(function () { //确定按钮 通用
    $('.sure').click(function () {
        var li = $('.killSelect i').size(); //判断有几个i
        // alert(1) //选中之后的图标  <i class="iconfont icon-icon-test" style="font-size: 2.4rem;"></i>
        if (li == 0) {
            alert("还未选择")
        } else {
            // $('.back').css({ //返回默认禁用，如果点击了确定则启用
            //     'pointer-events': 'auto'
            // })
            alert("选择成功")
        }


    });
});

$(document).ready(function () { //返回按钮 通用
    $('.back').click(function () {
        var li = $('.killSelect i').size(); //判断有几个i
        if (li == 0) {
            alert("还未选择")
        } else {
            $('.killSelects').addClass('hides');
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
        }
        // alert(1)
        // $('killSelects').addClass('hides');
        // $('header').removeClass('hides');
        // $('firstDiv').removeClass('hides');

    });
});

//狼人选择操作 结束，


//以下是预言家的操作 开始

$(document).ready(function () { //预言家查看事件
    $('#seer').on('click', function () {
        setTimeout(function () {
            $('#seer').addClass('color');
        }, 2000);
        $('.header').addClass('hides');
        $('.firstDiv').addClass('hides');
        $('.seerChecks').removeClass('hides');
        // console.log($('#kill').is('.color'));
        if ($('#seer').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.seerChecks').addClass('hides');
        }
    });
});


$(document).ready(function () { //选择查看谁
    var arr = [];
    $('.seerCheck li').on('click', function () {
        var index = $(this).index(); //鼠标点击的li的下标值
        $('.seerCheck li').eq(index).children().eq(0).addClass('hides'); //鼠标选中哪个 显示哪个的身份
        arr.push(index); //添加选中人的下标
        $('.seerCheck').css({ //只能查看一次
            'pointer-events': 'none'

        });
        $('.sureSeer').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });

});



$(document).ready(function () { //确定按钮 通用
    $('.sureSeer').click(function () {
        $(".seerCheck").each(function () {
            var fontSize = $(this).attr("style").indexOf("pointer-events");
            // console.log(fontSize);
            if (fontSize != (-1)) {
                alert("选择成功");
                $('.backSeer').css({
                    'pointer-events': 'auto',
                    background: '#FF4500'
                });
            }
        });
        // var li = $('.killSelect i').size(); //判断有几个i
        // alert(1) //选中之后的图标  <i class="iconfont icon-icon-test" style="font-size: 2.4rem;"></i>
        // if (a != (-1)) {
        //     alert("还未选择")
        // } else {
        //     // $('.back').css({ //返回默认禁用，如果点击了确定则启用
        //     //     'pointer-events': 'auto'
        //     // })
        //     alert("选择成功")
        // }
        // console.log(a);

    });
});

$(document).ready(function () { //返回按钮 通用
    $('.backSeer').click(function () {

        $('.killSelects').addClass('hides');
        $('.seerChecks').addClass('hides');
        $('.header').removeClass('hides');
        $('.firstDiv').removeClass('hides');

    });
});

//预言家的操作 结束


//女巫开始

$(document).ready(function () { //预言家查看事件
    $('#witch').on('click', function () {
        setTimeout(function () {
            $('#witch').addClass('color');
        }, 2000);
        $('.header').addClass('hides');
        $('.firstDiv').addClass('hides');
        $('.witchSelects').removeClass('hides');
        // console.log($('#kill').is('.color'));
        if ($('#witch').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.witchSelects').addClass('hides');
        }
    });
});

$(document).ready(function () { //选择查看谁
    var arr = [];
    $('.witchSelect li').on('click', function () {
        var index = $(this).index(); //鼠标点击的li的下标值
        $('.witchSelect li').eq(index).children().eq(0).addClass('hides'); //鼠标选中哪个 显示哪个的身份
        arr.push(index); //添加选中人的下标
        $('.witchSelect').css({ //只能查看一次
            'pointer-events': 'none'

        });
        $('.sureSeer').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });

});