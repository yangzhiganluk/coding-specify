/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $("html").niceScroll();

    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css({
            'color': '#f98818',
            'border-color': '#f98818'
        });
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css({ 'color': '', 'border-color': '' });
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});