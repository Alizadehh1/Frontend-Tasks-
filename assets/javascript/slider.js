document.querySelector('.slider-prev').addEventListener('click', function() {
document.querySelector('.slick-prev').click();
});

document.querySelector('.slider-prev2').addEventListener('click', function() {
document.querySelector('.slick-prev').click();
});

document.querySelector('.slider-next').addEventListener('click', function() {
document.querySelector('.slick-next').click();
});

document.querySelector('.slider-next2').addEventListener('click', function() {
document.querySelector('.slick-next').click();
});
$('.banner-slider-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    
    
  });
document.querySelector('.arrowPrev').addEventListener('click', function() {
document.querySelector('.product-slider').firstChild.click();
});
document.querySelector('.arrowNext').addEventListener('click', function() {
document.querySelector('.product-slider').lastChild.click();
});
$('.product-slider').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
    { 
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
      },
      // breakpoint: 770,
      // settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     autoplay: true,
      //     autoplaySpeed: 1500,
      // },
    }
  ]
  });

document.querySelector('.daily-best-sells-slider-prev').addEventListener('click', function() {
document.querySelector('.daily-best-sells-slider').firstChild.click();
});

document.querySelector('.daily-best-sells-slider-next').addEventListener('click', function() {
document.querySelector('.daily-best-sells-slider').lastChild.click();
});

$('.daily-best-sells-slider').slick({
    infinite: true,
    slidesToShow:4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
});



