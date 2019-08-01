var message = localStorage.getItem("message");
var arr = message.split(',');
var name = arr[0];
$('#username').attr('placeholder', name);



$('#password').blur(function () { //密码
    var regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/
    var pass = $('#password').val();
    if (!regex.test(pass)) {
        $('.passtext').addClass('shows');
        $('.passtext').animate({
            bottom: '10rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.passtext').removeClass('shows'); //找到对应的标签隐藏
            $('.passtext').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true"); //添加disabled属性
        return false;
    }
    
    $('#submit').removeAttr("disabled"); //移除disabled属性
    console.log($('#password').val());
    return true;
    
})




$('#confirm-password').blur(function () { //确认密码
    var value1 = $('#password').val();
    var value2 = $('#confirm-password').val();
    if (value1 != value2) {
        $('.firm-passtext').addClass('shows');
        $('.firm-passtext').animate({
            bottom: '10rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.firm-passtext').removeClass('shows'); //找到对应的标签隐藏
            $('.firm-passtext').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true"); //添加disabled属性
        return false;
    }
    $('#submit').removeAttr("disabled"); //移除disabled属性
    return true;
});




$('form').submit(function (e) {
    e.preventDefault();
    var arr = []; //存入数据

    if ($('#password').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi1').addClass('shows');
        setTimeout(function () {
            $('.tishi1').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // alert('用户名不能为空！');
        // form.username.focus();
        return false;
    }
    if ($('#confirm-password').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi1').addClass('shows');
        setTimeout(function () {
            $('.tishi1').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // form.username.focus();
        return false;
    }



    var username = name;
    arr.push(username);
    var password = $('#password').val();
    arr.push(password);

    localStorage.setItem("message", arr);
    // console.log(localStorage.getItem("message"));

    $('.tishi').addClass('shows');
    $('.tishi2').addClass('shows');
    setTimeout(function () {
        $('.tishi2').removeClass('shows'); //找到对应的标签隐藏
    }, 2000);
    setTimeout(function () {
        location.href = "index.html";
    }, 2000);

});