/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).css('backgroundColor', '#7e0204').find('a').css('color', '#fff');
    }, function () {
        $(this).hasClass('active') || $(this).css('backgroundColor', '').find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});