$('#next').click(function () {
    var message = localStorage.getItem("message");
    var arr = message.split(',');
    var name = arr[0];
    var _thisname = $('#username').val();
    if (name == _thisname) {
        location.href = "password1.html";
        return true;
    }
    $('.tishi').addClass('shows');
    $('.tishi1').addClass('shows');
    setTimeout(function () {
        $('.tishi1').removeClass('shows'); //找到对应的标签隐藏
    }, 2000);
});