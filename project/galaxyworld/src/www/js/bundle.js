/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css({
            'color': '#35c0f3'
        }).find('.nav-icon').css({
            'background-color': '#8be8ff',
            'border-color': '#35c0f3'
        });
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css({
            'color': ''
        }).find('.nav-icon').css({
            'background-color': '',
            'border-color': ''
        });;
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});