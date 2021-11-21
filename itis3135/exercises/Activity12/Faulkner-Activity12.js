$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        pause: 3000,
        pagerType: 'short',
        pagerSelector: '#id_pager'
    });
});