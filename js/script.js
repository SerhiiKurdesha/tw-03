$(document).ready(function () {
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 500,
        easing: 'ease',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: false,
                }
            }
        ]
    });
});

