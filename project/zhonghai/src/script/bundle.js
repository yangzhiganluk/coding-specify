/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $("html").niceScroll();

    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).css('border-bottom-color','#d4974e').find('a').css({
            'color': '#d4974e',
        });
    }, function () {
        $(this).hasClass('active') || $(this).css('border-bottom-color','').find('a').css({ 'color': ''});
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});