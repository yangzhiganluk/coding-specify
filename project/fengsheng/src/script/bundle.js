/**
 * Created by lulj on 2017/3/14.
 */
/**
 * Created by LLJ on 2017/3/12.
 */
$('.topbar .topbar-inner .fr ul li').hover(function () {
    $(this).find('a').css('color', '#b0740c');
}, function () {
    $(this).hasClass('active') || $(this).find('a').css('color', '');
}).click(function () {
    console.log(this);
    $(this).addClass('active').siblings().removeClass('active');
});
$('.leadership .leader-pics li:nth-child(even) .portrait').css({ 'marginLeft': '27px' });
$('.devCourse .intro-detail .timebox .timeunit .items p').hover(function () {
    $(this).parent().css('fontWeight', '600');
    $(this).siblings('.iconcircle').css({
        backgroundImage: 'url(images/hovercircle.png)'
    }, { width: '25px'
    }, { height: '25px' });
}, function () {
    $(this).parent().css('fontWeight', 'normal');
    $(this).siblings('.iconcircle').css({
        backgroundImage: ''
    }, { width: ''
    }, { height: '' });
});
$('.jobInfo .joblist .jobitem').hover(function () {
    $(this).css({ color: '#ea995d', borderBottomColor: 'rgba(234,153,93,.4)' });
}, function () {
    $(this).css({ color: '', borderBottomColor: '' });
}).click(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().siblings('.listitem').hide().eq(i).show();
});


