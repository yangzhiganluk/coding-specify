/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$(document).ready(function(){
    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css('color', '#4a959a');
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

})


