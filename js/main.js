(function ($) {
    "use strict";
    // SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 3000,
        speedAsDuration: true
    });

    // top sticky navigation bar
    $(".navigation-bar").sticky({
        topSpacing: 0,
        zIndex: 3
    });

    // home-03 slider(slick)
    $('.home-03-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".prev-main",
        nextArrow: ".next-main",
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // home-01 slider(slick)
    $('.home-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prev-main",
        nextArrow: ".next-main",
    });

    // Isotope jQuery plugin
    // note:init Isotope
    var $grid = $('.gallery-grid').isotope({
        itemSelector: '.gallery-item',
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });

    // Fancy-box
    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom-in-out",
        transitionEffect: "slide",
    });

})(jQuery);