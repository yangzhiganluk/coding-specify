/**
 * Created by juanl on 2017/4/10.
 */
$(document).ready(function () {
    $("html").niceScroll();

    $('.topbar .topbar-inner .fr ul li').hover(function () {
        $(this).find('a').css('color', '#fabb58');
    }, function () {
        $(this).hasClass('active') || $(this).find('a').css('color', '');
    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.application .entryIn .dropdown-menu').click(function(e){
        var $target = $(e.target);
        $target.is('a')&&$target.closest('.entryIn').find('.form-control').val($target.text());
    });

    $('#submit').click(function () {
        signin();
    });
    $('.contact .contact-info .col-1 .geo ').click(function(){
        window.open('../vendor/51map/map.html');
    })
});
