/**
 * Created by lollipop on 2018/1/11
 */
require.config({
    paths: {
        "jquery": "jquery.min",
        "bundle": "bundle"
    },
    shim: {
        "moment": {
            exports: "moment"
        },
        "layui": {
            exports: "layui"
        }
    }
});

require(['jquery', 'bundle'], function ($, bundle) {

    // $('.cube').on('click', function(){
    //     $(this).addClass('.active').siblings().removeClass('.active');
    // });

    const busi_speak = document.querySelector('.cube.busi-speak');
    const online_consult = document.querySelector('.cube.online-consult');
    const opinion = document.querySelector('.cube.opinion');
    const qrcode = document.querySelector('.cube.qrcode ');
    const gotop = document.querySelector('.cube.gotop ');
    let qrcodeTop = $(".page-right .qrcode").offset().top + 50 + 8;

    document.onscroll = function () {
        if (bundle.scroll().top > qrcodeTop) {
            // 高度大于300显示
            $(".gotop").css({ opacity: 1 });
            // 将leader的值传入
            leader = bundle.scroll().top;
        } else {
            // 小于300隐藏
            $(".gotop").css({ opacity: 0 });
        }
    };
    let target = 0,
        leader = 0,
        timer = null;
    gotop.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            // target 目标值 leader初始时是滚动的高度
            let step = (target - leader) / 10;
            // 如果大于0向上取整小于0向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // leader发生改变
            leader = leader + step;
            // 返回到哪一个地方
            window.scrollTo(0, leader);
            if (leader == target) {
                clearInterval(timer);
            }
        }, 30);
    };

    bundle.rightAlert(busi_speak);
    bundle.rightAlert(online_consult);
    bundle.rightAlert(qrcode);

    $(opinion).click(function () {
        layui.use(['layer', 'form'], function () {
            const layer = layui.layer,
                  form = layui.form;

            const index = layer.open({
                type: 1, //页面层
                shade: 0.8,
                title: '意见反馈',
                skin: "page-form-wrapper",
                scrollbar: false,
                content: $('#form-fill') //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
            });

            form.verify({
                username: function (value, item) {
                    //value：表单的值、item：表单的DOM对象
                    if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                        return '姓名不能有特殊字符';
                    }
                    if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                        return '姓名不能出现下划线\'_\'';
                    }
                    if (/^\d+\d+\d$/.test(value)) {
                        return '姓名不能出现数字';
                    }
                }

                //我们既支持上述函数式的方式，也支持下述数组的形式
                //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
                // ,pass: [
                //     /^[\S]{6,12}$/
                //     ,'密码必须6到12位，且不能出现空格'
                // ]
            });
            //监听提交
            form.on('submit(immidate)', function (data) {
                // console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
                // console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
                console.log(data.field); //当前容器的全部表单字段，名值对形式：{name: value}
                // return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                //请求成功之后弹框
                //     const layer =layui.layer
                //     layer.open({
                //         type: 1,    //页面层
                //         shade: 0.8,
                //         title: false,
                //         skin: "form-succ-wrapper",
                //         scrollbar: false,
                //         content: $('#form-succ'), //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                //         btn: ['知道了'],
                //         btnAlign: 'c'
                //     });
            });
        });
    });
});