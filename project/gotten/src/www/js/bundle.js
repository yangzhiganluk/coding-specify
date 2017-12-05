/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).css('border-color', '#f3b23c').find('a').css('color', '#f3b23c');
    }, function () {
        $(this).hasClass('active') || $(this).css('border-color', '').find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.join .posi .general-posi .posiname').hover(function () {
        $(this).find('.posiname').css('background-color', '#f3b23c');
    }, function () {
        $(this).find('.posiname').css('background-color', '');
    }).click(function () {
        var t = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.general-posi').siblings('.posi-detail').find('li').hide().eq(t).show();
    });
});