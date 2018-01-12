switch(environment) {
    case 'local':
        assetsRootPath = 'http://192.168.1.9:3000/';
        break;
    case 'dev':
        assetsRootPath = 'http://printserver/51home2/';
        break;
    case 'production':
        assetsRootPath = 'http://www.51jrq.com/newhome2/';
        break;
}
function judgeIsIe8() {
    var i = navigator.appName, t = navigator.appVersion, e = t.split(";"), o = e[1].replace(/[ ]/g, "");
    if ("Microsoft Internet Explorer" == i && "MSIE8.0" == o)return !0
}
$("document").ready(function () {
    function i() {
        var i = $(window).scrollTop();
        i - 198 > e ? ($(".left-side img,.right-side a:nth-child(1) img").css({
                position: "fixed",
                top: "14px"
            }), $(window).scrollTop(i), $(".right-side a:nth-child(2) img").css({
                position: "fixed",
                top: "226px"
            })) : ($(".left-side img,.right-side a:nth-child(1) img,.right-side a:nth-child(2) img").css({position: ""}), $(window).scrollTop(i)), i > 300 ? $(".scrollToTop").css("opacity", "1") : $(".scrollToTop").css("opacity", "0")
    }

    // swiper video
    var mySwiper = new Swiper('.swiper-container.swiper-video',{
        pagination : '.video-pagination',
        autoplay: 5000,
        loop:true
    });

    $('.swiper-video .left').on('click',function(event){
        event.preventDefault();
        mySwiper.swipePrev();
    });
    $('.swiper-video .right').on('click',function(event){
        event.preventDefault();
        mySwiper.swipeNext();
    });

    //点击按钮播放视屏
    $('.swiper-video .play-button').on('click',function(event){
        var imgSrc = $(this).parent('div').data('img');
        var videoSrc = $(this).parent('div').data('video');
        playEvent(imgSrc,videoSrc);
    });

    $(this).parent("ul").data("selectType", "公司"), $("input, textarea").placeholder();
    var t = new Swiper(".swiper-container", {
        pagination: ".pagination",
        loop: !0,
        grabCursor: !0,
        paginationClickable: !0,
        autoplay: 2500,
        useCSS3Transforms: !1,
    });
    $(".arrow-left").on("click", function (i) {
        i.preventDefault(), t.swipePrev()
    }), $(".arrow-right").on("click", function (i) {
        i.preventDefault(), t.swipeNext()
    }), $(".nav li a").hover(function () {
        $(this).css({color: "#FFFFFF", background: "#ff971c"})
    }, function () {
        $(this).hasClass("active") || $(this).css({color: "", background: ""})
    }), $(".category-tab-type .category-type-item").hover(function () {
        $(this).addClass("active"), $(this).children("ul").fadeIn()
    }, function () {
        $(this).children("ul").fadeOut(50), $(this).removeClass("active")
    }), $(".category-tab-type .category-type-item").hover(function () {
        $categoryTabContent = $(this).children("ul"), $categoryTabContent.css("background", "rgba(49,49,49,0.65068)")
    }, function () {
        $(this).children("ul").css("background", "")
    }), $(".category-tab-content a").hover(function () {
        $(this).css("color", "red")
    }, function () {
        $(this).css("color", "#fff")
    }), ($(".search-bar").focus(function () {
        "" === $(this).val() && ($(this)[0].placeholder = "")
    }), $(".search-bar").blur(function () {
        "" === $(this).val() && ($(this)[0].placeholder = "搜索职位、公司、姓名...")
    })), $(".search-area ul").hover(function () {
        $(this).css("height", "72px"), $(this).children("li:nth-child(1)").children("img").attr("src", assetsRootPath + "image/arrow-up.png")
    }, function () {
        $(this).css("height", "36px"), $(this).children("li:nth-child(1)").children("img").attr("src", assetsRootPath + "image/arrow-down.png")
    }), $(".search-area ul li:nth-child(2)").on("click", function () {
        var i = $(this).text(), t = $(this).prev("li").text();
        $(this).prev("li")[0].innerHTML = i + '<img src="'+assetsRootPath+'image/arrow-down.png" alt="arrow-down" />', $(this)[0].innerHTML = t + '<img style="visibility:hidden" src="'+assetsRootPath+'image/arrow-down.png" alt="arrow-up" />', $(this).parent("ul").css("height", "36px"), $(this).parent("ul").data("selectType", i)
    }), $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                webmv: "http://vvdide-10037104.video.myqcloud.com/norv.mp4",
                m4v: "http://vvdide-10037104.video.myqcloud.com/norv.mp4",
                ogv: "http://vvdide-10037104.video.myqcloud.com/norv.mp4",
                poster: assetsRootPath+"/image/iPh2_03.png"
            })
        },
        swfPath: assetsRootPath+"vendor/jPlayer/dist/jplayer",
        solution: "html,flash",
        supplied: "WebM,ogv,m4v",
        cssSelectorAncestor: "#jp_container_1",
        size: {width: "194px", height: "345px"},
        preload: 'none'
    }), $("#jquery_jplayer_1").on("click", function () {
        $(".iphone .jp-play").trigger("click")
    });
    var e = $(".category-area .left-side img").offset().top;
    $(window).scroll($.debounce(100, i)), $(".scrollToTop").on("click", function (i) {
        i.preventDefault(), $("body,html").animate({scrollTop: 0}, 500)
    }), $(".company-list-right .company-pic").hover(function () {
        $(this).children(".big-logo").stop().animate({top: "-108px"}, 500), $(this).children(".small-logo").stop().animate({top: "0px"}, 500)
    }, function () {
        $(this).children(".big-logo").stop().animate({top: "0px"}, 500), $(this).children(".small-logo").stop().animate({top: "108px"}, 500)
    }), $(".company-list-left .company-pic").hover(function () {
        $(this).children(".big-logo").stop().animate({top: "-108px"}, 500), $(this).children(".small-logo").stop().animate({top: "0px"}, 500)
    }, function () {
        $(this).children(".big-logo").stop().animate({top: "0px"}, 500), $(this).children(".small-logo").stop().animate({top: "108px"}, 500)
    }), $(".company-list-left .company-ad").hover(function () {
        $(this).children(".big-logo").stop().animate({top: "-108px"}, 500);
        $(this).children(".bottom-container").stop().animate({top: "0px"}, 500);
    }, function () {
        $(this).children(".big-logo").stop().animate({top: "0px"}, 500);
        $(this).children(".bottom-container").stop().animate({top: "108px"}, 500)
    }),$(".company-list-right .company-ad").hover(function () {
        $(this).children(".big-logo").stop().animate({top: "-108px"}, 500);
        $(this).children(".bottom-container").stop().animate({top: "0px"}, 500);
    }, function () {
        $(this).children(".big-logo").stop().animate({top: "0px"}, 500);
        $(this).children(".bottom-container").stop().animate({top: "108px"}, 500)
    }), $(".company-ad").hover(function () {
        var i = $(".company-list-left li").index(this);
        (i + 1) % 2 === 1 ? ($(this).children(".info").css({left: 0}), $(this).children(".info").stop().animate({left: "-189px"})) : $(this).children(".info").stop().animate({left: 253})
    }, function () {
        $(this).children(".info").stop().animate({left: 64})
    }), $(".company-ad .bottom-container .big-logo").on("click", function (e) {
        var i = $(this).parent().parent('li.company-ad').data("img"), t = $(this).parent().parent('li.company-ad').data("video");
        playEvent(i,t);
    }), $("#jp_container_2 .jp-play").on("click", function () {
        $(this).hasClass("pause") ? $(this).removeClass("pause") : $(this).addClass("pause")
    }), $("#jp_container_2 .jp-full-screen").on("click", function () {
        $(this).hasClass("full") ? $(this).removeClass("full") : $(this).addClass("full")
    }), $("#jp_container_2 .cancel").on("click", function () {
        $('.video-container').css({
            display: 'none'
        });
        $(".video-container").css({
            top: $(window).scrollTop()
        }), $("body").css({overflow: ""}), $("#jquery_jplayer_2").jPlayer("destroy"), $("#jp_container_2 .jp-play").removeClass("pause")
        $('#jp_container_2').children('.error-message').css('display','none');
    });

    function playEvent(i,t) {
        $("body").css({overflow: "hidden"});
        $(".video-container").css({display: "block", top: $(window).scrollTop()});
        $('#jp_container_2').css('display','block');
        $("#jquery_jplayer_2").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {m4v: t, ogv: t, webmv: t, poster: i})
            },
            cssSelectorAncestor: "#jp_container_2",
            swfPath: assetsRootPath+"vendor/jPlayer/dist/jplayer",
            supplied: "webmv, ogv, m4v",
            solution: "html,flash",
            size: {width: "880px", height: "536px"},
            useStateClassSkin: !0,
            smoothPlayBar: !0,
            keyEnabled: !0,
            remainingDuration: !0,
            toggleDuration: !0
        }).bind($.jPlayer.event.error,function(event){
            var errorMessage = $('#jp_container_2').children('.error-message');
            errorMessage.css('display','table');
            //视屏播放出错
            switch(event.jPlayer.error.type) {
                case $.jPlayer.error.URL:
                    errorMessage.children('span').html('无法播放此视屏!<br />原因: 视屏地址(<span>"'+t+'"</span>)或许不正确!');
                    break;
                case $.jPlayer.error.URL_NOT_SET:
                case $.jPlayer.error.NO_SUPPORT:
                case $.jPlayer.error.NO_SOLUTION:
                    errorMessage.children('span').html(
                        "抱歉,视屏暂时无法播放!可能由以下三种原因造成:"+"" +
                        "<br /><span>1: 未安装Flash或Flash版本过低，为了更好的播放体验，建议安装最新版chrome或firefox浏览器 下载浏览器</span>"+
                        "<br /><span>2:视屏地址没有设置</span>"+
                        "<br /><span>3:视屏格式本播放器暂不支持</span>"
                    );
                    break;
            }
        }).bind($.jPlayer.event.play,function(event){
            $("#jp_container_2 .jp-play").addClass('pause');
            $('.jp-video-loading').removeClass('show').addClass('hidden');
        }).bind($.jPlayer.event.resize,function(event){
            var fullScreen = $("#jp_container_2 .jp-full-screen");
            fullScreen.hasClass('full') ? fullScreen.removeClass("full") : fullScreen.addClass("full");
        });
    }
});