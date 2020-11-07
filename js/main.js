$(document).ready(function () {
    var elem = document.querySelector('.carousel')
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'center',
        contain: true,
        autoPlay: false,
        wrapAround: true,
        dragThreshold: 3,
        prevNextButtons: false,
        pageDots: false,
        on: {
            change: function (index) {
                console.log(index);
                let elem = $(`.body-text-${index + 1}`)
                $(`.body-text`).removeClass("active")
                elem.addClass("active")
            }
        }
    });
    var prevButton = document.querySelector('.pev');
    prevButton.addEventListener('click', function () {
        flkty.previous();
    });
    var nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function () {
        flkty.next();
    });
    var menu = $('nav'),
        logo = $('.header__section .header__menu .header__section--logo'),
        lang = $('.header__section .header__menu .header__section--language');
    var btn_menu = document.querySelector('.btn_menu');
    //const animation = gsap.timeline()
    btn_menu.addEventListener('click', function () {
        menu.addClass('active');
        logo.addClass('images_custom');
        lang.addClass('language');
    })
    tl = new TimelineMax({ repeat: 0 });
    tl
        //.fromTo('.header__section--logo', { x: -500, y: 0 }, "-=1")
        .fromTo(".nav-menu", { x: 0, y: "-100%" }, { x: 0, y: 0, duration: 1 })
        .fromTo(".header__section--logo", { x: 0, y: 0 }, { x: -500, y: 0 })
        .from(".nav-close", {x: "100%", duration: 1}, "-=1")
        .fromTo(".startger", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.1 })
        .reverse()

    var nav_btn__close = document.querySelector('.nav_btn__close');
    nav_btn__close.addEventListener('click', function () {
        menu.removeClass('active');
        logo.removeClass('images_custom');
        lang.removeClass('language');
        tl.reversed() ? tl.restart() : tl.reverse();

    })
    document.getElementById('menu').addEventListener('click', function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    

    // var brand_line = document.querySelector('.brand-line')
    // brand_line.addEventListener('scroll', function() {
    //     console.log('ok');
    // })
    console.log(gsap);
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 100) {
            $(".header__menu").addClass("darkHeader");
            //gsap.to(".darkHeader", 1, { top: 0, ease: Expo.easeInOut }, "-=0.8")
        } else {
            $(".header__menu").removeClass("darkHeader");
        }
    });
});


