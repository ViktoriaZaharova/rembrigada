$(document).ready(function () {

    $('.main-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        speed: 700,
        appendArrows: $('.main-number__wrapper'),
        autoplay: false,
        autoplaySpeed: 3000,
        asNavFor: ".main-number-slider",
        prevArrow: '<div class="main-arrow-prev third-arrow"></div>',
        nextArrow: '<div class="main-arrow-next third-arrow"></div>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $('.main-number-slider').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 3000,
        verticalSwiping: true,
        asNavFor: ".main-slider"
    });

    $('.completed-objects__slider').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        speed: 700,
        appendArrows: $('.completed-arrow'),
        prevArrow: '<div class="slick-arrow-prev slick-arrow-main"></div>',
        nextArrow: '<div class="slick-arrow-next slick-arrow-main"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.btn-mobile-menu').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).siblings('.box-phone');


        if (!$this.hasClass('click')) {
            $this.addClass('click');
            $this.find('.text').text('Закрыть');
            $this.find('img').attr('src', 'img/close.png');

            content.hide();
        } else {
            $this.removeClass('click');
            $this.find('.text').text('Меню');
            $this.find('img').attr('src', 'img/burger.png');

            content.show();
        }
    });

    $('.btn-mobile-menu').click(function () {
        $('.mobile-menu-wrapper').toggleClass('on');
    });


    $('.dropdown-menu-link').click(function (e) {
        e.preventDefault();
       $(this).toggleClass('open').siblings('.dropdown-menu__submenu').slideToggle();
    });

    $('.mobile-menu .menu-item-link').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open').siblings('.dropdown-wrapper').slideToggle();
    });

    $('.modal-close').click(function () {
        $(this).parent().removeClass('active');
        $('.btn-modal-callback').removeClass('click');
    });

    $('.btn-modal-callback').click(function () {
        $(this).toggleClass('click');
        $('.modal-callback').toggleClass('active');
    });




    $('[type="submit"]').click(function () {
        $('.modal-thanks').toggleClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal-div"); // тут указываем ID элемента
        var btn = $('.btn-modal-callback');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0 && div.find('.modal-close').has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });

    $("body").on("click", "#btn-top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });


    ymaps.ready(function(){
        var map = new ymaps.Map("map", {
            center: [55.713886,37.401596],
            zoom: 17
        });

        var place = new ymaps.Placemark(
            [55.713886,37.401596], {
                hintContent: 'Рембригада-116. <br> До 21-00',
            }
            // {
            //     iconImageHref: 'img/location.png',
            //     iconImageSize: [25, 38],
            //     iconLayout: 'default#image',
            // }
        );
        map.geoObjects.add(place);
    });
});

// fixed header
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
