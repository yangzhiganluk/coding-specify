/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).css('backgroundColor', '#7e0204').find('a').css('color', '#fff');
    }, function () {
        $(this).hasClass('active') || $(this).css('backgroundColor', '').find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.join .posi .general-posi .single-box').hover(function () {
        $(this).find('.posiname').css('backgroundColor', '#e55217');
        $(this).find('.line').css('backgroundColor', '#e55217');
    }, function () {
        $(this).find('.posiname').css('backgroundColor', '');
        $(this).find('.line').css('backgroundColor', '');
    }).click(function () {
        var t = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.general-posi').siblings('.posi-detail').find('li').hide().eq(t).show();
    });
});