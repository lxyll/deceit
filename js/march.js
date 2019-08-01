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

    if ($('.day span').text() == '第一天') {
        $('.god').hide();
    }
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
    heights('.all');
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
        $('#seer').removeClass('two')
        $('.god').hide();
    });
});


$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];
    // localStorage.setItem('killSelect', arr);
    $('.killSelect li').on('click', function () {
        // alert(1)
        // var a = $(".killSelect li [src^='img/r2']");
        // if ($(".killSelect li img [src^='img/r2']").parent()) {
        //     alert('不能自杀');
        // }
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.killSelect li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        $('.killSelect li').eq(index).removeClass('live'); //狼人选择删除live标签
        $('.killSelect li').eq(index).addClass('kill'); //添加死亡标签
        var li = $('.killSelect i').size(); //判断有几个i
        // console.log(num);

        arr.push(index);
        // console.log(arr); //存放的是狼人杀人的下标
        localStorage.setItem('killSelect', arr);
        if (li > 1) {
            // alert(1)
            // var a = arr[num];
            // console.log(a);
            // console.log($('.killSelect li').eq(arr[num]).children('i'));
            $('.killSelect li').eq(arr[num]).children('i').remove(); //删除上一次的添加事件
        }

        num += 1;
    });
    // if ($('.day span').text() == '第二天') {
    //     // alert(1);
    //     arr.splice(0,arr.length);
    //     localStorage.setItem('killSelect', arr);
    // }

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

        // console.log($('#kill').is('.color'));
        if ($('#seer').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.seerChecks').addClass('hides');
        }
        console.log($('#seer').is('.two'));
        if ($('#seer').is('.two')) {
            alert('请按顺序');

        } else {
            setTimeout(function () {
                $('#seer').addClass('color');
            }, 2000);
            $('.header').addClass('hides');
            $('.firstDiv').addClass('hides');
            $('.seerChecks').removeClass('hides');
            $('#witch').removeClass('three')
        }
        $('.god').hide();
    });
});


$(document).ready(function () { //选择查看谁
    var arr = [];
    // localStorage.setItem('seerCheck', arr);
    $('.seerCheck li').on('click', function () {
        var index = $(this).index(); //鼠标点击的li的下标值
        $('.seerCheck li').eq(index).children().eq(0).addClass('hides'); //鼠标选中哪个 显示哪个的身份
        arr.push(index); //添加选中人的下标
        // $('.seerCheck').css({ //只能查看一次
        //     'pointer-events': 'none'

        // });
        $('.sureSeer').css({
            'pointer-events': 'auto',
            background: '#FF4500'
        });
        // console.log(arr); //预言家查看的下标
        localStorage.setItem('seerCheck', arr);
    });
    // if ($('.day span').text() == '第二天') {
    //     // alert(1);
    //     arr.splice(0,arr.length);
    //     localStorage.setItem('seerCheck', arr);
    // }
});



$(document).ready(function () { //确定按钮 通用
    $('.sureSeer').click(function () {
        $(".seerCheck").each(function () {
            // var pointer = $(this).attr("style").indexOf("pointer-events");
            // // console.log(pointer);
            // if (pointer != (-1)) {
            //     alert("选择成功");
            //     $('.backSeer').css({
            //         'pointer-events': 'auto',
            //         background: '#FF4500'
            //     });
            // }
        });
        alert("选择成功");
        $('.backSeer').css({
            'pointer-events': 'auto',
            background: '#FF4500'
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

        console.log($('#kill').is('.color'));
        if ($('#witch').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.witchSelects').addClass('hides');
        }
        if ($('#witch').is('.three')) {
            alert('请按顺序')
        } else {
            setTimeout(function () {
                $('#witch').addClass('color');
            }, 2000);
            $('.header').addClass('hides');
            $('.firstDiv').addClass('hides');
            $('.witchSelects').removeClass('hides');
            $('#defend').removeClass('four')
        }
        $('.god').hide()
    });
});

$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];
    // localStorage.setItem("witch", arr);
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
        // console.log(arr); //女巫毒 救人的下标
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

    // if ($('.day span').text() == '第二天') {
    //     // alert(1);
    //     arr.splice(0,arr.length);
    //     localStorage.setItem('witch', arr);
    // }
    // console.log(arr);

    $('.bane').one('click', function () { //点击毒药

        // alert(1)
        // var bane = $('.witchSelect li').children().is('i');
        // console.log($('.witchSelect li').children().is('i').parent());
        var lis = localStorage.getItem('witch');
        var li = lis.split(',');
        var num = li[li.length - 1];
        // console.log(num);
        $('.witchSelect li').eq(num).addClass('kill'); //女巫毒人，给死亡标签
        $('.witchSelect li').eq(num).removeClass('live'); //移除本身的生存标签
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
        $('.witchSelect li').eq(num).removeClass('kill'); //女巫救人，移除死亡标签
        $('.witchSelect li').eq(num).addClass('live'); //添加生存标签
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
    // localStorage.setItem('defend', arr);
    $(document).ready(function () { //守卫事件
        $('#defend').on('click', function () {

            // console.log($('#kill').is('.color'));
            if ($('#defend').is('.color')) {
                alert("此步骤已完成")
                $('.header').removeClass('hides');
                $('.firstDiv').removeClass('hides');
                $('.defendChecks').addClass('hides');
            }
            if ($('#defend').is('.four')) {
                alert('请按顺序')
            } else {
                setTimeout(function () {
                    $('#defend').addClass('color');
                }, 2000);
                $('.header').addClass('hides');
                $('.firstDiv').addClass('hides');
                $('.defendChecks').removeClass('hides');
                $('#sheriff').removeClass('five')
            }
            // console.log(arr);
            $('.god').hide()
        });


    });


    $('.defendCheck li').on('click', function () { //选中
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-icon-test pitchOn" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.defendCheck li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        $('.defendCheck li').eq(index).addClass('defend'); //守卫选中添加一个守卫标签
        var li = $('.defendCheck i').size(); //判断有几个i
        // console.log(num);
        arr.push(index);
        localStorage.setItem('defend', arr);

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
        // console.log(arr);
    });

    // if ($('.day span').text() == '第二天') {
    //     // alert(1);
    //     arr.splice(0,arr.length);
    //     localStorage.setItem('defend', arr);
    // }

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
    if ($('#sheriff').is('.color')) {
        alert("此步骤已完成")

    }
    if ($('#sheriff').is('.five')) {
        alert('请按顺序')
    } else {
        $('#sheriff').addClass('color');
        alert("竞选警长发言");
        $('#badge').removeClass('six')
    }

});

// 竞选警长结束




// 警徽选择 badge

$(document).ready(function () { //选择杀谁
    var num = -1;
    var arr = [];
    // localStorage.setItem('badge', arr);
    $(document).ready(function () { //守卫事件
        $('#badge').on('click', function () {

            // console.log($('#kill').is('.color'));
            if ($('#badge').is('.color')) {
                alert("此步骤已完成")
                $('.header').removeClass('hides');
                $('.firstDiv').removeClass('hides');
                $('.badgeChecks').addClass('hides');
            }
            if ($('#badge').is('.six')) {
                alert('请按顺序')
            } else {
                setTimeout(function () {
                    $('#badge').addClass('color');
                }, 2000);
                $('.header').addClass('hides');
                $('.firstDiv').addClass('hides');
                $('.badgeChecks').removeClass('hides');
                $('#sheriffSpeak').removeClass('seven')
            }
            $('.god').hide()
        });
    });

    $('.badgeCheck li').on('click', function () {
        // alert(1)
        var index = $(this).index(); //鼠标点击的li的下标值
        // console.log(index);
        var pitchOn = '<i class="iconfont icon-alarm pitchOn1" style="font-size: 2.4rem;"></i>' //添加选中之后的状态
        $('.badgeCheck li').eq(index).append(pitchOn); //鼠标选中哪个就添加哪个
        var li = $('.badgeCheck i').size(); //判断有几个i
        // console.log(num);

        arr.push(index);
        // console.log(arr);
        localStorage.setItem('badge', arr);
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

        if ($('#sheriffSpeak').is('.seven')) {
            alert('请按顺序')
        } else {
            $('#sheriffSpeak').addClass('color');
            alert("请警长发言")
            $('#ownerSpeak').removeClass('eight')
        }
    });
    $('#ownerSpeak').click(function () {
        // setTimeout(function () {
        //     $('#ownerSpeak').addClass('color');
        // }, 2000);

        if ($('#ownerSpeak').is('.eight')) {
            alert('请按顺序')
        } else {
            $('#ownerSpeak').addClass('color');
            alert("请所有人发言")
            $('#vote').removeClass('nine')
        }

    });
});

// 发言结束



// 投票开始

$(document).ready(function () {
    var num = -1;
    var arr = [];
    // localStorage.setItem('vote', arr);
    $('#vote').on('click', function () {

        // console.log($('#kill').is('.color'));
        if ($('#vote').is('.color')) {
            alert("此步骤已完成")
            $('.header').removeClass('hides');
            $('.firstDiv').removeClass('hides');
            $('.votes').addClass('hides');
        }
        if ($('#vote').is('.nine')) {
            alert('请按顺序')
        } else {
            setTimeout(function () {
                $('#vote').addClass('color');
            }, 2000);
            $('.header').addClass('hides');
            $('.firstDiv').addClass('hides');
            $('.votes').removeClass('hides');
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
        localStorage.setItem('vote', arr);
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
    // if ($('.day span').text() == '第二天') {
    //     // alert(1);
    //     arr.splice(0,arr.length);
    //     localStorage.setItem('vote', arr);
    // }

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





$('.god').click(function () {
    $('.header').addClass('hides');
    $('.firstDiv').addClass('hides');
    $('.all').removeClass('hides');
    $('.god').hide();



    // $(document).ready(function () {
        // Arr[Arr.length - 1] 去最后一个值
        // $("#all").load(location.href+"#all");
        // setTimeout(function () {
        var killSelects = localStorage.getItem('killSelect'); //狼人杀人的下标
        var killSelect = killSelects.split(',');
        var killlength = killSelect.length; //数组的长度
        var killnum = killSelect[killSelect.length - 1] //每次数组的最后一个值
        console.log(killnum);
    
    
        localStorage.getItem('seerCheck'); //预言家查看的
    
    
        var witchs = localStorage.getItem('witch'); //女巫
        var witch = witchs.split(',');
        var witchnum = witch[witch.length - 1]
        console.log(witchnum);
    
    
        var defends = localStorage.getItem('defend'); //守卫的
        var defend = defends.split(',');
        var defendnum = defend[defend.length - 1]
        console.log(defendnum);
    
        var votes = localStorage.getItem('vote'); //投票的
        var vote = votes.split(',');
        var votenum = vote[vote.length - 1]
        console.log(votenum);
    
        // if (killlength > 1) {
        $('.own li').eq(killnum).removeClass('live'); //
        $('.own li').eq(killnum).addClass('kill'); //这个和上面那条都是第一次狼人杀人的操作
        // }
    
        // $(".div").load(location.href+" .div");//div局部刷新
        // $('.bane').click(function () {//女巫毒
        //     $('.own li').eq(witchnum).addClass('kill');//
        //     $('.own li').eq(witchnum).removeClass('live');//女巫毒人
        // });
    
        // $('.antidote').click(function () {//女巫救
        //     $('.own li').eq(killnum).removeClass('kill');//
        //     $('.own li').eq(killnum).addClass('live');//女巫救人，和狼人的下标是同一个，被杀才救
        // });
    
    
        $('.suredefend').click(function () {
            $('.own li').eq(defendnum).addClass('defend');
        });
        if ($('.own li').eq(defendnum).is('defend')) {
            alert(1)
            $('.own li').eq(defendnum).removeClass('kill');
            $('.own li').eq(defendnum).addClass('live');
        }
    
        // $('.own li').eq(votenum).removeClass('live');
        // $('.own li').eq(votenum).addClass('kill');
    
        if ($('.own li').is('.kill')) {
            $('.kill').children().remove();
            var image = "<img src='img/logo.jpg'>";
            $('.kill').append(image);
    
        }
        // }, 100);
    
    
    // });
});

$('.backown').click(function () {
    $('.header').removeClass('hides');
    $('.firstDiv').removeClass('hides');
    $('.all').addClass('hides');
    $('.god').show();
});

$('.god').click(function () {
    $("#all").load(location.href + "#all");
});


var aa = 0;
$('.backvote').click(function () { //投票页面的返回
    // $("#all").load(location.href+"#all");
    
    var arr = ['二', '三', '四', '五', '六', '七', '八', '九', '十']
    $('.header').removeClass('hides');
    $('.firstDiv').removeClass('hides');
    $('.votes').addClass('hides');
    $('.day span').text('第' + arr[aa] + '天');
    $('.god').removeClass('hides');

    $('#kill').removeClass('color');
    $('#kill').addClass('one');
    $('#seer').removeClass('color');
    $('#seer').addClass('two');
    $('#witch').removeClass('color');
    $('#witch').addClass('three');
    $('#defend').removeClass('color');
    $('#defend').addClass('four');
    $('#sheriff').removeClass('color');
    $('#sheriff').addClass('five');
    $('#badge').removeClass('color');
    $('#badge').addClass('six');
    $('#sheriffSpeak').removeClass('color');
    $('#sheriffSpeak').addClass('seven');
    $('#ownerSpeak').removeClass('color');
    $('#ownerSpeak').addClass('eight');

    $('#vote').addClass('nine');

    if ($('.day span').text() == '第二天') {
        $('#sheriff').addClass('color');
        $('#badge').addClass('color');
        $('#sheriff').addClass('five');
        $('#badge').addClass('six');
        $('#vote').removeClass('color');
        $('.god').show();

        $('#defend').click(function (event) {
            event.stopPropagation()
            $('#sheriffSpeak').removeClass('seven');
        });

        $('.back').click(function () {
            $('.god').show();
        });

        $('.backSeer').click(function () {
            $('.god').show();
        });

        $('.backWitch').click(function () {
            $('.god').show();
        });

        $('.backdefend').click(function () {
            $('.god').show();
        });

        $('.backbadge').click(function () {
            $('.god').show();
        });

        $('.backvote').click(function () {
            $('.god').show();
        });

    }


    aa += 1;
});