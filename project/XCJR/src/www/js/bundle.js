/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$(document).ready(function () {
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css('color', '#2263b7');
        $(this).find('.arrowup').css('display', 'block');
    }, function () {
        if ($(this).hasClass('active')) {
            return;
        } else {
            $(this).find('a').css('color', '');
            $(this).find('.arrowup').css('display', '');
        }
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});