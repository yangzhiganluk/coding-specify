'use strict';

// header animated
var headerWayPoint = function headerWayPoint() {
    var textAreaEle = $('.text-area');
    if (textAreaEle.length > 0) {
        textAreaEle.waypoint(function (direction) {
            console.log(this.element)
            if (direction === 'down') {
                setTimeout(function () {
                    $('.intro-animate-1').addClass('animated fadeInUp');
                }, 100);
                setTimeout(function () {
                    $('.intro-animate-2').addClass('animated fadeInUp');
                }, 400);
                setTimeout(function () {
                    $('.intro-animate-3').addClass('animated fadeInUp');
                }, 700);
            }
        }, { offset: '75%' });
    }
};

// section01 animated
var firstSectionWayPoint = function firstSectionWayPoint() {
    var sectionEle = $('.section-01');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this = this;

            if (direction === 'down') {
                setTimeout(function () {
                    $(_this.element).find('h1').addClass('animated fadeInUp');
                }, 100);
                setTimeout(function () {
                    $(_this.element).find('p').addClass('animated fadeInUp');
                }, 400);
            }
        }, { offset: '75%' });
    }
};

// computer image animated
var computerImageWayPoint = function computerImageWayPoint() {
    var imgContainer = $('.section-01 .computer');
    if (imgContainer.length > 0) {
        imgContainer.waypoint(function (direction) {
            var _this2 = this;

            if (direction === 'down') {

                setTimeout(function () {
                    $(_this2.element).children('.center-computer').addClass('animated fadeInUp');
                }, 100);

                setTimeout(function () {
                    $(_this2.element).children('.right-computer').addClass('animated fadeInRight');
                    $(_this2.element).children('.left-computer').addClass('animated fadeInLeft');
                }, 400);
            }
        }, { offset: '75%' });
    }
};

// section02 animated
var secondSectionWayPoint = function secondSectionWayPoint() {
    var sectionEle = $('.section-02');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this3 = this;

            if (direction === 'down') {

                setTimeout(function () {
                    $(_this3.element).find('h1').addClass('animated fadeInUp');
                }, 100);

                setTimeout(function () {
                    $(_this3.element).find('p').addClass('animated fadeInUp');
                    $(_this3.element).find('img').addClass('animated fadeInUp');
                }, 400);
            }
        }, { offset: '75%' });
    }
};

// section03 animated
var thirdSectionWayPoint = function thirdSectionWayPoint() {
    var sectionEle = $('.section-03');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this4 = this;

            if (direction === 'down') {

                setTimeout(function () {
                    $(_this4.element).find('h1').addClass('animated fadeInUp');
                }, 100);

                setTimeout(function () {
                    $('.section-03 .row:first-child').find('.display-t').addClass('animated fadeInUp');
                }, 400);

                setTimeout(function () {
                    $('.section-03 .row:nth-child(2)').find('.display-t').addClass('animated fadeInUp');
                }, 700);

                setTimeout(function () {
                    $('.section-03 .row:last-child').find('.display-t').addClass('animated fadeInUp');
                }, 1000);
            }
        }, { offset: '75%' });
    }
};

// section04 animated
var fourthSectionWayPoint = function fourthSectionWayPoint() {
    var sectionEle = $('.section-04');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this5 = this;

            if (direction === 'down') {
                setTimeout(function () {
                    $(_this5.element).find('h1').addClass('animated fadeInUp');
                }, 100);

                setTimeout(function () {
                    $(_this5.element).find('p').addClass('animated fadeInUp');
                }, 400);

                setTimeout(function () {
                    $(_this5.element).find('img').addClass('animated fadeInRight');
                }, 700);

                setTimeout(function () {
                    $(_this5.element).find('.inline-block').addClass('animated fadeInRight');
                }, 1200);
            }
        }, { offset: '75%' });
    }
};

// section05 animated
var fifthSectionWayPoint = function fifthSectionWayPoint() {
    var sectionEle = $('.section-05');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this6 = this;

            if (direction === 'down') {
                setTimeout(function () {
                    $(_this6.element).find('.top').addClass('animated fadeInLeft');
                }, 100);

                setTimeout(function () {
                    $(_this6.element).find('.bottom').addClass('animated fadeInLeft');
                }, 400);

                setTimeout(function () {
                    $(_this6.element).find('.text').addClass('animated fadeInRight');
                }, 700);
            }
        }, { offset: '75%' });
    }
};

// section06 animated
var SixthSectionWayPoint = function SixthSectionWayPoint() {
    var sectionEle = $('.section-06');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this7 = this;

            if (direction === 'down') {
                setTimeout(function () {
                    $(_this7.element).find('.inline-block:first-child').addClass('animated fadeInLeft');
                }, 100);
                setTimeout(function () {
                    $(_this7.element).find('.top').addClass('animated fadeInRight');
                }, 400);
                setTimeout(function () {
                    $(_this7.element).find('.bottom').addClass('animated fadeInRight');
                }, 700);
            }
        }, { offset: '75%' });
    }
};

// section07 animated
var SeventhSectionWayPoint = function SeventhSectionWayPoint() {
    var sectionEle = $('.footer');
    if (sectionEle.length > 0) {
        sectionEle.waypoint(function (direction) {
            var _this8 = this;

            if (direction === 'down') {
                setTimeout(function () {
                    $(_this8.element).find('.title').addClass('animated fadeInUp');
                }, 100);
                setTimeout(function () {
                    $(_this8.element).find('.sub-title').addClass('animated fadeInUp');
                }, 400);
                setTimeout(function () {
                    $(_this8.element).find('.desc').addClass('animated fadeInUp');
                }, 700);
                setTimeout(function () {
                    $(_this8.element).find('.btn').addClass('animated fadeInUp');
                }, 1000);
            }
        }, { offset: '75%' });
    }
};

$(function () {

    $("html").niceScroll();

    headerWayPoint();

    //section01
    firstSectionWayPoint();
    computerImageWayPoint();

    //section02
    secondSectionWayPoint();

    //section03
    thirdSectionWayPoint();

    //section04
    fourthSectionWayPoint();

    //section05
    fifthSectionWayPoint();

    //section06
    SixthSectionWayPoint();

    // section07
    SeventhSectionWayPoint();

    $('button').on('click', function () {
        window.open('register.html', '_blank');
    });
});