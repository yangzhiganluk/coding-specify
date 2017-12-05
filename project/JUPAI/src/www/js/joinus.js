/**
 * Created by lulj on 2017/4/21.
 */

// page(0);
var data = $('.recruit .box-content .job-box');
var len = data.length;
var newNum = Math.ceil(len / 5);
//container 容器，count 总页数 pageindex 当前页数
function setPage(container, count, pageindex) {
    // loadData(count,pageindex);
    var container = container;
    var count = count;
    var pageindex = pageindex;
    var a = [];
    //总页数少于10 全部显示,大于10 显示前3 后3 中间3 其余....
    if (pageindex == 1) {
        a[a.length] = "<a href=\"javascript:void(0)\" class=\"prev unclick\"><img src='images/joinus/arrowleft.png' alt=''></a>";
    } else {
        a[a.length] = "<a href=\"javascript:void(0)\" class=\"prev\"><img src='images/joinus/arrowleft.png' alt=''></a>";
    }
    function setPageList() {
        if (pageindex == i) {
            a[a.length] = "<a href=\"javascript:void(0)\" class=\"on index\">" + i + "</a>";
        } else {
            a[a.length] = "<a href=\"javascript:void(0)\" class=\"index\">" + i + "</a>";
        }
    }

    //总页数小于10
    if (count <= 10) {
        for (var i = 1; i <= count; i++) {
            setPageList();
        }
    }

    if (pageindex == count) {
        a[a.length] = "<a href=\"javascript:void(0)\" class=\"next unclick\"><img src='images/joinus/arrowright.png' alt=''></a>";
    } else {
        a[a.length] = "<a href=\"javascript:void(0)\" class=\"next\"><img src='images/joinus/arrowright.png' alt=''></a>";
    }
    container.innerHTML = a.join("");
    //事件点击
    var pageClick = function () {
        var oAlink = container.getElementsByTagName("a");
        var inx = pageindex; //初始的页码
        if (inx == 1) {
            $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
        }
        oAlink[0].onclick = function () {
            //点击上一页
            if (inx == 1) {
                $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
                return false;
            }
            inx--;
            setPage(container, count, inx);
            $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
            return false;
        };
        for (var i = 1; i < oAlink.length - 1; i++) {
            //点击页码
            oAlink[i].onclick = function () {
                inx = parseInt(this.innerHTML);
                setPage(container, count, inx);
                $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
                return false;
            };
        }
        oAlink[oAlink.length - 1].onclick = function () {
            //点击下一页
            if (inx == count) {
                $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
                return false;
            }
            inx++;
            setPage(container, count, inx);
            $('.recruit .box-content ul').html(data.slice((inx - 1) * 5, (inx - 1) * 5 + 5));
            return false;
        };
    };
    pageClick();
}

function loadData(count, inx) {
    //调用后台加载数据
    alert(count + "," + inx);
}

setPage(document.getElementById("pagenation"), newNum, 1);