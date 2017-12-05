/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $("html").niceScroll();

    $('.topbar .topbar-inner .fr ul li').hover(
        function () {
            $(this).find('a').css({
                'color': '#006cb7',
            }).siblings('.arrow-up').show();
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css({ 'color': ''}).siblings('.arrow-up').hide();
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});