/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css('color', '#cd9c42');
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css('color', '');
    }).click(function () {
        console.log(this);
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.history .yearlist ul .year').hover(function () {
        $(this).css({ 'color': '#271c1a' }, { 'borderBottomColor': '#cd9c43' });
    }, function () {
        $(this).css({ 'color': '' }, { 'borderBottomColor': '' });
    }).click(function () {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.yearlist').siblings('.monthlist').find('ul').hide().eq(i).show();;
    });
    $('.talentsWanted .joblist ul .jobitem').hover(function () {
        $(this).css({ 'color': '#5e3801' });
    }, function () {
        $(this).css({ 'color': '' });
    }).click(function () {
        var t = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.listbox').siblings('.jobbox').find('.jobInfo').eq(t).addClass('active').siblings().removeClass('active');
    });
});