$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });

    var toTopButton = $('#toTopButton');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            toTopButton.addClass('show');
        } else {
            toTopButton.removeClass('show');
        }
    });

    toTopButton.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});