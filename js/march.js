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
    heights('.defendChecks');
    heights('.badgeChecks');
    heights('.votes');
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
            $('.defendCheck li').eq(i).append(image); //添加守卫页面
            $('.badgeCheck li').eq(i).append(image); //添加警徽页面
            $('.vote li').eq(i).append(image); //添加投票页面
        }
    }
    // $(".killSelect li img").prev().hide();
    $(".killSelect li [src^='img/r2']").prev().hide(); //非狼人 隐藏
    $(".seerCheck li [src^='img/r3']").prev().hide(); //非预言家 隐藏
    $(".witchSelect li [src^='img/r1']").prev().hide(); //非女巫 隐藏
    $(".defendCheck li [src^='img/r4']").prev().hide(); //非守卫 隐藏
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
            var pointer = $(this).attr("style").indexOf("pointer-events");
            // console.log(pointer);
            if (pointer != (-1)) {
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

$(document).ready(function () { //女巫查看事件
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

$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];
    $('.witchSelect li').on('click', function () {
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.witchSelect li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.witchSelect i').size(); //判断有几个i
        // console.log(num);
        arr.push(index);


        if (li > 1) {

            $('.witchSelect li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件

        }
        num += 1;
        // console.log(arr);
        localStorage.setItem("witch", arr);
        $('.bane').css({
            'pointer-events': 'auto',
            background: '#8B1A1A'
        });
        $('.antidote').css({
            'pointer-events': 'auto',
            background: '#32CD32'
        });
    });
    // console.log(arr);

    $('.bane').one('click', function () { //点击毒药

        // alert(1)
        // var bane = $('.witchSelect li').children().is('i');
        // console.log($('.witchSelect li').children().is('i').parent());
        var lis = localStorage.getItem('witch');
        var li = lis.split(',');
        var num = li[li.length - 1];
        // console.log(num);
        $('.witchSelect li').eq(num).addClass('kill');
        $(this).css({
            'background': '#a8a8a8',
            'pointer-events': 'none'
        });

        $('.sureWitch').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });

    });

    $('.antidote').one('click', function () { //解药
        // alert(1)
        // var bane = $('.witchSelect li').children().is('i');
        // console.log($('.witchSelect li').children().is('i').parent());
        var lis = localStorage.getItem('witch');
        var li = lis.split(',');
        var num = li[li.length - 1];
        // console.log(num);
        $('.witchSelect li').eq(num).removeClass('kill');
        $(this).css({
            'background': '#a8a8a8',
            'pointer-events': 'none'
        });
        $('.sureWitch').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });

    $('.inaction').click(function () {
        $('.backWitch').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });

    $('.sureWitch').click(function () {
        $('.backWitch').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });

    $('.backWitch').click(function () {
        $('.killSelects').addClass('hides');
        $('.seerChecks').addClass('hides');
        $('.header').removeClass('hides');
        $('.firstDiv').removeClass('hides');
        $('.witchSelects').addClass('hides');
    });

});



// 女巫结束



//守卫开始


$(document).ready(function () {
    var num = -1;
    var arr = [];
    $(document).ready(function () { //守卫事件
        $('#defend').on('click', function () {
            setTimeout(function () {
                $('#defend').addClass('color');
            }, 2000);
            $('.header').addClass('hides');
            $('.firstDiv').addClass('hides');
            $('.defendChecks').removeClass('hides');
            // console.log($('#kill').is('.color'));
            if ($('#defend').is('.color')) {
                alert("此步骤已完成")
                $('.header').removeClass('hides');
                $('.firstDiv').removeClass('hides');
                $('.defendChecks').addClass('hides');
            }
        });
    });


    $('.defendCheck li').on('click', function () { //选中
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.defendCheck li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.defendCheck i').size(); //判断有几个i
        // console.log(num);
        arr.push(index);


        if (li > 1) {

            $('.defendCheck li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件

        }
        num += 1;
        // console.log(arr);
        // localStorage.setItem("witch", arr);
        $('.suredefend').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });

    });


    $('.suredefend').click(function () {
        $('.backdefend').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });


    $('.backdefend').click(function () { //返回
        $('.killSelects').addClass('hides');
        $('.seerChecks').addClass('hides');
        $('.header').removeClass('hides');
        $('.firstDiv').removeClass('hides');
        $('.defendChecks').addClass('hides');
    });



});

// 守卫结束




// 竞选警长

$('#sheriff').click(function () {
    // setTimeout(function () {
    //     $('#sheriff').addClass('color');
    // });
    $('#sheriff').addClass('color');
    alert("竞选警长发言");
});

// 竞选警长结束




// 警徽选择 badge

$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];

    $(document).ready(function () { //守卫事件
        $('#badge').on('click', function () {
            setTimeout(function () {
                $('#badge').addClass('color');
            }, 2000);
            $('.header').addClass('hides');
            $('.firstDiv').addClass('hides');
            $('.badgeChecks').removeClass('hides');
            // console.log($('#kill').is('.color'));
            if ($('#badge').is('.color')) {
                alert("此步骤已完成")
                $('.header').removeClass('hides');
                $('.firstDiv').removeClass('hides');
                $('.badgeChecks').addClass('hides');
            }
        });
    });

    $('.badgeCheck li').on('click', function () {
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.badgeCheck li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.badgeCheck i').size(); //判断有几个i
        // console.log(num);

        arr.push(index);
        // console.log(arr);
        if (li > 1) {
            // alert(1)
            // var a = arr[num];
            // console.log(a);
            // console.log($('.badgeCheck li').eq(arr[num]).children('i'));
            $('.badgeCheck li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件
        }

        $('.surebadge').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });

        num += 1;
    });


    $('.surebadge').click(function () {
        $('.backbadge').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });


    $('.backbadge').click(function () { //返回
        $('.header').removeClass('hides');
        $('.firstDiv').removeClass('hides');
        $('.badgeChecks').addClass('hides');
    });


});

// 警徽选择结束



// 发言开始
$(document).ready(function () {
    $('#sheriffSpeak').click(function () {
        // setTimeout(function () {
        //     $('#sheriffSpeak').addClass('color');
        // }, 2000);
        $('#sheriffSpeak').addClass('color');
        alert("请警长发言")
    });
    $('#ownerSpeak').click(function () {
        // setTimeout(function () {
        //     $('#ownerSpeak').addClass('color');
        // }, 2000);
        $('#ownerSpeak').addClass('color');
        alert("请警长发言")
    });
});

// 发言结束



// 投票开始

$(document).ready(function () { 
    var num = -1;
    var arr = [];
    $('#vote').on('click', function () {
        setTimeout(function () {
            $('#vote').addClass('color');
        }, 2000);
        $('.header').addClass('hides');
        $('.firstDiv').addClass('hides');
        $('.votes').removeClass('hides');
        // console.log($('#kill').is('.color'));
        if ($('#vote').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.votes').addClass('hides');
        }
    });

    $('.vote li').on('click', function () {
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.vote li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.vote i').size(); //判断有几个i
        // console.log(num);
    
        arr.push(index);
        // console.log(arr);
        if (li > 1) {
            // alert(1)
            // var a = arr[num];
            // console.log(a);
            // console.log($('.vote li').eq(arr[num]).children('i'));
            $('.vote li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件
        }
    
        $('.surevote').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    
        num += 1;
    });
    
    
    $('.surevote').click(function () {
        $('.backvote').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
    });
    
    
    $('.backvote').click(function () { //返回
        $('.header').removeClass('hides');
        $('.firstDiv').removeClass('hides');
        $('.votes').addClass('hides');
    });
    

});


// 投票结束