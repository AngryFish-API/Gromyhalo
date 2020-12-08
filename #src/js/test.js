$('#btn-toggle').click(function() {
    if ($('.video').css('opacity') == '0') {
        $('.video').fadeTo(1500, 1);
        $('.intro-title').slideUp(1000);
        $(this).addClass('btn--is-active')
    } else {
        $('.video').fadeTo(1500, 0);
        $('.intro-title').slideDown(1000);
        $(this).removeClass('btn--is-active')
        $('html, body').animate({
            scrollTop: $(".wrapper-catalog--demo").offset().top // класс объекта к которому приезжаем
        }, 800);
    }
});

// Owl.carousel

$('.card-container').owlCarousel({
    loop: true,
    margin: 33,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
})

// Close / Open Pop-ups

$('.popup-open').click(function() {
    $('.popup-modal').fadeToggle('100')
})
$('.popup__close').click(function() {
    $('.popup-modal').fadeToggle('100')
})