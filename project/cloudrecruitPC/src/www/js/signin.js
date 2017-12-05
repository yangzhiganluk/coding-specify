/**
 * Created by juanl on 2017/5/26.
 */
var bundle = {
    openDialog: function (text) {
        $('.dialog-container').css({
            opacity: 1
        });
        $('.dialog').css({
            width: 400 + 'px'
        });
        $('.dialog_bd').text(text);
        $('.dialog').addClass('active');
    },
    closeDialog: function () {
        $('.dialog-container').css({
            opacity: 0
        });
        $('.dialog').css({
            width: 0
        });
        $('.dialog').removeClass('active');
    }
};

function signin() {
    var name = $("#contact").val();
    if ("" == name) {
        // alert("姓名不能为空！");
        bundle.openDialog("姓名不能为空！");
        return;
    }
    var position = $("#designation").val();
    if ("" == position) {
        // alert("职位不能为空！");
        bundle.openDialog("职位不能为空！");
        return;
    }

    var mobile = $("#tel").val();
    if ("" == mobile) {
        // alert("手机号不能为空！");
        bundle.openDialog("手机号不能为空！");
        return;
    }
    if (!/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(mobile)) {
        // alert("请输入有效的手机号码！");
        bundle.openDialog("请输入有效的手机号码！");
        return;
    }

    var email = $("#mailbox").val();
    if ("" == email) {
        // alert("邮箱不能为空！");
        bundle.openDialog("邮箱不能为空！");
        return;
    } else {
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (!re.test(email)) {
            // alert("请输入有效的邮箱！");
            bundle.openDialog("请输入有效的邮箱！");
            return;
        }
    }

    var companyname = $("#company").val();
    if ("" == companyname) {
        // alert("公司不能为空！");
        bundle.openDialog("公司不能为空！");
        return;
    }

    var companysize = $("#size").val();
    if ("" == companysize) {
        // alert("公司规模不能为空！");
        bundle.openDialog("公司规模不能为空！");
        return;
    }

    var city = $("#province").val();
    if ("" == city) {
        // alert("城市不能为空！");
        bundle.openDialog("城市不能为空！");
        return;
    }

    var msg = $("#message-text").val() || '';

    var data = {
        name: name,
        position: position,
        mobile: mobile,
        email: email,
        companyname: companyname,
        companysize: companysize,
        city: city,
        msg: msg
    };

    $.ajax({
        url: '/hrmanage/api/trycontact/save',
        type: "post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify({
            head: {},
            data: data
        }),
        success: function (data) {
            console.log(data);
            data = eval("(" + data + ")");
            if (data.result) {
                $("#contact").val('');
                $("#designation").val('');
                $("#tel").val('');
                $("#mailbox").val('');
                $("#company").val('');
                $("#size").val('');
                $("#province").val('');
                $("#message-text").val('');
                bundle.openDialog("提交成功！");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            bundle.openDialog('error ' + textStatus + ' ' + errorThrown);
        }
    });
}