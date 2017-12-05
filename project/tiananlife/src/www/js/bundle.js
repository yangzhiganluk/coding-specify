/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    var scale = $(window).width() / 1920;
    $('.banner').height(528 * scale);
    $('.banner .pic-bg').height(528 * scale);
    $('.banner .table').height(528 * scale);
    $('.banner').css({
        display: 'block'
    });
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css('color', '#f08200').siblings('i').css('display', 'block');
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css('color', '').siblings('i').css('display', 'none');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});