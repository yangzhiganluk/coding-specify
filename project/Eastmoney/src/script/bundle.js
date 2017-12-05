/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).css('backgroundImage', 'url(images/navbg.png)').find('a').css('color', '#ffffff');
    }, function () {
        $(this).hasClass('active') || $(this).css('backgroundImage', '').find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
