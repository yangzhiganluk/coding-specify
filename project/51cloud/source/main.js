// header animated
const headerWayPoint = () => {
    const textAreaEle = $('.text-area');
    if(textAreaEle.length > 0){
        textAreaEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $('.intro-animate-1').addClass('animated fadeInUp');
                },100);
                setTimeout(()=>{
                    $('.intro-animate-2').addClass('animated fadeInUp');
                },400);
                setTimeout(()=>{
                    $('.intro-animate-3').addClass('animated fadeInUp');
                },700);
            }
        },{ offset: '75%' });
    }
}

// section01 animated
const firstSectionWayPoint = () => {
    const sectionEle = $('.section-01');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $(this.element).find('h1').addClass('animated fadeInUp');
                },100);
                setTimeout(()=>{
                    $(this.element).find('p').addClass('animated fadeInUp');
                },400);
            }
        },{ offset: '75%' });
    }
}

// computer image animated
const computerImageWayPoint = () => {
    const imgContainer = $('.section-01 .computer');
    if(imgContainer.length > 0){
        imgContainer.waypoint(function(direction){
            if(direction === 'down'){

                setTimeout(()=>{
                    $(this.element).children('.center-computer').addClass('animated fadeInUp');
                },100);

                setTimeout(()=>{
                    $(this.element).children('.right-computer').addClass('animated fadeInRight');
                    $(this.element).children('.left-computer').addClass('animated fadeInLeft');
                },400);

            }
        },{ offset: '75%' });
    }
}

// section02 animated
const secondSectionWayPoint = () => {
    const sectionEle = $('.section-02');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){

                setTimeout(()=>{
                    $(this.element).find('h1').addClass('animated fadeInUp');
                },100);

                setTimeout(()=>{
                    $(this.element).find('p').addClass('animated fadeInUp');
                    $(this.element).find('img').addClass('animated fadeInUp');
                },400);
                
            }
        },{ offset: '75%' });
    }
}

// section03 animated
const thirdSectionWayPoint = () => {
    const sectionEle = $('.section-03');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){

                setTimeout(()=>{
                    $(this.element).find('h1').addClass('animated fadeInUp');
                },100)

                setTimeout(function() {
                    $('.section-03 .row:first-child').find('.display-t').addClass('animated fadeInUp');
                }, 400);

                setTimeout(function() {
                    $('.section-03 .row:nth-child(2)').find('.display-t').addClass('animated fadeInUp');
                }, 700);

                setTimeout(function() {
                    $('.section-03 .row:last-child').find('.display-t').addClass('animated fadeInUp');
                }, 1000);

            }
        },{ offset: '75%' });
    }
}


// section04 animated
const fourthSectionWayPoint = () => {
    const sectionEle = $('.section-04');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $(this.element).find('h1').addClass('animated fadeInUp');
                },100)

                setTimeout(()=>{
                    $(this.element).find('p').addClass('animated fadeInUp');
                },400);

                setTimeout(()=>{
                    $(this.element).find('img').addClass('animated fadeInRight');
                },700);

                setTimeout(()=>{
                    $(this.element).find('.inline-block').addClass('animated fadeInRight');
                },1200);

            }
        },{ offset: '75%' });
    }
}

// section05 animated
const fifthSectionWayPoint = () => {
    const sectionEle = $('.section-05');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $(this.element).find('.top').addClass('animated fadeInLeft');
                },100)

                setTimeout(()=>{
                    $(this.element).find('.bottom').addClass('animated fadeInLeft');
                },400);

                setTimeout(()=>{
                    $(this.element).find('.text').addClass('animated fadeInRight');
                },700);

            }
        },{ offset: '75%' });
    }
}

// section06 animated
const SixthSectionWayPoint = () => {
    const sectionEle = $('.section-06');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $(this.element).find('.inline-block:first-child').addClass('animated fadeInLeft');
                },100);
                setTimeout(()=>{
                    $(this.element).find('.top').addClass('animated fadeInRight');
                },400)
                setTimeout(()=>{
                    $(this.element).find('.bottom').addClass('animated fadeInRight');
                },700);
            }
        },{ offset: '75%' });
    }
}

// section07 animated
const SeventhSectionWayPoint = () => { 
    const sectionEle = $('.footer');
    if(sectionEle.length > 0){
        sectionEle.waypoint(function(direction){
            if(direction === 'down'){
                setTimeout(()=>{
                    $(this.element).find('.title').addClass('animated fadeInUp');
                },100);
                setTimeout(()=>{
                    $(this.element).find('.sub-title').addClass('animated fadeInUp');
                },400)
                setTimeout(()=>{
                    $(this.element).find('.desc').addClass('animated fadeInUp');
                },700);
                setTimeout(()=>{
                    $(this.element).find('.btn').addClass('animated fadeInUp');
                },1000)
            }
        },{ offset: '75%' });
    }
}

$(function(){

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

    $('button').on('click',()=>{
        window.open('register.html','_blank');
    });
})