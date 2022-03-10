document.querySelector('.leftArrow').addEventListener('click', function() {
    document.querySelector('.slick-prev').click();
    });
    
    document.querySelector('.rightArrow').addEventListener('click', function() {
    document.querySelector('.slick-next').click();
    });

$('.slider-container').slick({
    infinite: true,
    slidesToShow:3,
    slidesToScroll: 1,
    });