/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css({
            'color': '#ffffff',
            'backgroundImage': 'url(images/navbg.png)'
        });
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css({ 'color': '', 'backgroundImage': '' });
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});