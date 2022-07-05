$('.findYourOwnStyle').slick({
    dots: true,
    infinite: true,
    arrows: false
})

$('.guitars').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        },
      ]
  });

$('.partners').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
  });