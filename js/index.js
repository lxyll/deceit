$(document).ready(function () {

    $("#icon").click(function () {
        var music = document.getElementById("music");
        if (music.paused) {
            music.play();
            $('.icon').toggleClass('icon-laba1');
        } else {
            music.pause();
            $('.icon').toggleClass('icon-laba1');
        }
    });
});



$('#username').blur(function () { //用户名
    var regex = /^[a-zA-Z][a-zA-Z0-9]{8,}/
    var names = $('#username').val();
    if (!regex.test(names)) {
        $('.nametext').addClass('shows');
        $('.nametext').animate({
            bottom: '22rem',
            '-webkit-transition': 'all 8s',
        });
        setTimeout(function () {
            $('.nametext').removeClass('shows'); //找到对应的标签隐藏
            $('.nametext').css({
                bottom: '0'
            });
        }, 2000);
        $('#LoginSave').attr('disabled', "true"); //添加disabled属性
        return false;

    }
    var message = localStorage.getItem("message");
    var arr = message.split(',');
    var name = arr[0];
    // var password = arr[1];
    var _thisname = $('#username').val();
    if (_thisname != name) {
        $('.tishi').addClass('shows');
        $('.tishi1').addClass('shows');
        setTimeout(function () {
            $('.tishi1').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        $('#LoginSave').attr('disabled', "true"); //添加disabled属性
        return false;
    }
    $('#LoginSave').removeAttr("disabled"); //移除disabled属性
    return true;
    // console.log($('#username').val());
})



$('#password').blur(function () { //密码
    var regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/
    var pass = $('#password').val();
    if (!regex.test(pass)) {
        $('.passtext').addClass('shows');
        $('.passtext').animate({
            bottom: '22rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.passtext').removeClass('shows'); //找到对应的标签隐藏
            $('.passtext').css({
                bottom: '0'
            });
        }, 2000);
        $('#LoginSave').attr('disabled', "true"); //添加disabled属性
        return false;
    }
    var message = localStorage.getItem("message");
    var arr = message.split(',');
    // var name = arr[0];
    var password = arr[1];
    var _thispassword = $('#password').val();
    if (_thispassword != password) {
        $('.tishi').addClass('shows');
        $('.tishi2').addClass('shows');
        setTimeout(function () {
            $('.tishi2').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        $('#LoginSave').attr('disabled', "true"); //添加disabled属性
        return false;
    }
    $('#LoginSave').removeAttr("disabled"); //移除disabled属性
    return true;
    // console.log($('#password').val());
})

// var aa = localStorage.getItem("message");//取得本地的数据
// console.log(aa);
// var bb = aa.split(',')//转换成数组
// console.log(bb);
// console.log(bb[0]);//用户名
// console.log(bb[1]);//密码

$('#LoginSave').click(function () {
    // alert(1);
    var message = localStorage.getItem("message");
    var arr = message.split(',');
    var name = arr[0];
    var password = arr[1];
    var _thisname = $('#username').val();
    var _thispassword = $('#password').val();
    if (name == _thisname && password == _thispassword) {
        location.href = "gamestart.html";
        return true;
    }
    if (_thisname== '' || _thispassword == '') {
        $('.tishi').addClass('shows');
        $('.tishi3').addClass('shows');
        setTimeout(function () {
            $('.tishi3').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
    }
    return false;
});