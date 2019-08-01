!(function (window, document) {
    function GVerify(options) { //创建一个图形验证码对象，接收options对象为参数
        this.options = { //默认options参数值
            id: "", //容器Id
            canvasId: "verifyCanvas", //canvas的ID
            width: "100", //默认canvas宽度
            height: "30", //默认canvas高度
            type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: ""
        }

        if (Object.prototype.toString.call(options) == "[object Object]") { //判断传入参数类型
            for (var i in options) { //根据传入的参数，修改默认参数值
                this.options[i] = options[i];
            }
        } else {
            this.options.id = options;
        }

        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();

        this._init();
        this.refresh();
    }

    GVerify.prototype = {
        /**版本号**/
        version: '1.0.0',

        /**初始化方法**/
        _init: function () {
            var con = document.getElementById(this.options.id);
            var canvas = document.createElement("canvas");
            this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
            this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
            canvas.id = this.options.canvasId;
            canvas.width = this.options.width;
            canvas.height = this.options.height;
            canvas.style.cursor = "pointer";
            canvas.innerHTML = "您的浏览器版本不支持canvas";
            con.appendChild(canvas);
            var parent = this;
            canvas.onclick = function () {
                parent.refresh();
            }
        },

        /**生成验证码**/
        refresh: function () {
            this.options.code = "";
            var canvas = document.getElementById(this.options.canvasId);
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            } else {
                return;
            }

            ctx.textBaseline = "middle";

            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, this.options.width, this.options.height);

            if (this.options.type == "blend") { //判断验证码类型
                var txtArr = this.options.numArr.concat(this.options.letterArr);
            } else if (this.options.type == "number") {
                var txtArr = this.options.numArr;
            } else {
                var txtArr = this.options.letterArr;
            }

            for (var i = 1; i <= 4; i++) {
                var txt = txtArr[randomNum(0, txtArr.length)];
                this.options.code += txt;
                ctx.font = randomNum(this.options.height / 2, this.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色		
                ctx.shadowOffsetX = randomNum(-3, 3);
                ctx.shadowOffsetY = randomNum(-3, 3);
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.options.width / 5 * i;
                var y = this.options.height / 2;
                var deg = randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /**绘制干扰线**/
            for (var i = 0; i < 4; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.stroke();
            }
            /**绘制干扰点**/
            for (var i = 0; i < this.options.width / 4; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        },

        /**验证验证码**/
        validate: function (code) {
            var code = code.toLowerCase();
            var v_code = this.options.code.toLowerCase();
            // console.log(v_code); //打印验证码
            if (code == v_code) {
                return true;
            } else {
                this.refresh();
                return false;
            }
        }
    }
    /**生成字母数组**/
    function getAllLetter() {
        var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9";
        return letterStr.split(",");
    }
    /**生成一个随机数**/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**生成一个随机色**/
    function randomColor(min, max) {
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    window.GVerify = GVerify;
})(window, document);



// var arr = [1,2,3];
// localStorage.setItem("a",arr);
// console.log(localStorage.getItem("a"));
// localStorage.clear();





$('#username').blur(function () { //用户名
    var regex = /^[a-zA-Z][a-zA-Z0-9]{8,}/
    var names = $('#username').val();
    if (!regex.test(names)) {
        $('.nametext').addClass('shows');
        $('.nametext').animate({
            bottom: '22rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.nametext').removeClass('shows'); //找到对应的标签隐藏
            $('.nametext').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true");//添加disabled属性
        return false;

    }
    $('#submit').removeAttr("disabled"); //移除disabled属性
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
        $('#submit').attr('disabled', "true");//添加disabled属性
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
            bottom: '22rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.firm-passtext').removeClass('shows'); //找到对应的标签隐藏
            $('.firm-passtext').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true");//添加disabled属性
        return false;
    }
    $('#submit').removeAttr("disabled"); //移除disabled属性
    return true;
});




$('#malibox').blur(function () { //邮箱
    var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var mali = $('#malibox').val();
    if (!regex.test(mali)) {
        $('.malibox').addClass('shows');
        $('.malibox').animate({
            bottom: '22rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.malibox').removeClass('shows'); //找到对应的标签隐藏
            $('.malibox').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true");//添加disabled属性
        return false;
    }
    $('#submit').removeAttr("disabled"); //移除disabled属性
    return true;
    // console.log($('#password').val());
})



$('#phone').blur(function () { //手机
    var regex = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    var ph = $('#phone').val();
    if (!regex.test(ph)) {
        $('.phone').addClass('shows');
        $('.phone').animate({
            bottom: '22rem',
            transition: 'all 8s',
        });
        setTimeout(function () {
            $('.phone').removeClass('shows'); //找到对应的标签隐藏
            $('.phone').css({
                bottom: '0'
            });
        }, 2000);
        $('#submit').attr('disabled', "true");//添加disabled属性
        return false;
    }
    $('#submit').removeAttr("disabled"); //移除disabled属性
    return true;
    // console.log($('#password').val());
})



$('form').submit(function (e) {
    e.preventDefault();
    var arr = []; //存入数据
    if ($('#username').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi1').addClass('shows');
        setTimeout(function () {
            $('.tishi1').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // alert('用户名不能为空！');
        // $('#username').focus();
        return false;
    }
    if ($('#password').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi2').addClass('shows');
        setTimeout(function () {
            $('.tishi2').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // alert('用户名不能为空！');
        // form.username.focus();
        return false;
    }
    if ($('#confirm-password').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi3').addClass('shows');
        setTimeout(function () {
            $('.tishi3').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // form.username.focus();
        return false;
    }
    if ($('#malibox').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi4').addClass('shows');
        setTimeout(function () {
            $('.tishi4').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // form.username.focus();
        return false;
    }
    if ($('#phone').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi5').addClass('shows');
        setTimeout(function () {
            $('.tishi5').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // form.username.focus();
        return false;
    }
    if ($('#code_input').val() == '') {
        $('.tishi').addClass('shows');
        $('.tishi6').addClass('shows');
        setTimeout(function () {
            $('.tishi6').removeClass('shows'); //找到对应的标签隐藏
        }, 2000);
        // form.username.focus();
        return false;
    }


    var username = $('#username').val();
    arr.push(username);
    var password = $('#password').val();
    arr.push(password);

    localStorage.setItem("message", arr);
    // console.log(localStorage.getItem("message"));

    $('.tishi').addClass('shows');
    $('.tishi7').addClass('shows');
    setTimeout(function () {
        $('.tishi7').removeClass('shows'); //找到对应的标签隐藏
    }, 2000);
    setTimeout(function () {
        location.href = "index.html";
    },2000);
    
});

// localStorage.clear();