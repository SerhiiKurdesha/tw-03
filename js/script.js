// $(document).ready(function () {
//     $('.slider').slick({
//         arrows:true,
//         dots:true,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         speed: 500,
//         easing: 'ease',
//         infinite: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnDotsHover: true,
//         responsive: [

//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }

//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         dots: false,
//                         autoplay: false,
//                     }
//                 }
//             }
//         ]
//     });
// });


$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $('.slider').slick({
//   centerPadding: '60px',
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//       responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: true,
//         slidesToScroll: 3,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: true,
//         centerPadding: '40px',
//         slidesToScroll: 3,
//         slidesToShow: 1
//       }
//     }
//   ]
// });