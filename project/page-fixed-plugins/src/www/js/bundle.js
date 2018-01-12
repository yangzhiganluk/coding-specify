/**
 * Created by lollipop on 2018/1/2
 */
/**
 获取cookie里面的参数
 */
define(function () {
    function getCookie(cookieName) {
        var arr,
            reg = new RegExp("(^| )" + cookieName + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
    }
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);return null;
    }
    function rightAlert(ele) {
        $(ele).hover(function () {
            $(ele).find('.right-alert').css({
                display: "block",
                opacity: 1
            }).stop().animate({
                left: "-220px"
            });
        }, function () {
            $(ele).find('.right-alert').css({
                display: "",
                opacity: ""
            }).stop().animate({
                left: ""
            });
        });
    }
    /*
    * 获取水平方向/垂直方向，滚动的距离。
    * document.documentElement.scrollLeft
    * 兼容性
    * 返回顶部：window.scrollTo(x,y) 指定滚动到的位置
    * 返回顶部：window.scrollTo(0,0) 指定滚动到的位置
    *
    */

    function scroll() {
        if (window.pageYOffset != null) // ie9+ 和其他浏览器
            {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            } else if (document.compatMode == "CSS1Compat") // 声明的了 DTD
            // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
            {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                };
            } else {
            return { // 剩下的肯定是怪异模式的
                left: document.body.scrollLeft,
                top: document.body.scrollTop
            };
        }
    }

    //Do setup work here
    return {
        getCookie: getCookie,
        getUrlParam: getUrlParam,
        rightAlert: rightAlert,
        scroll: scroll
    };
});