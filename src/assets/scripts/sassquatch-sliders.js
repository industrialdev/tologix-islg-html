(function($){

  $(".slider__slide:nth-of-type(1)").addClass("slider__slide--left");
  $(".slider__slide:nth-of-type(2)").addClass("active");
  $(".slider__slide:nth-of-type(3)").addClass("slider__slide--right");

  setTimeout(function(){
    setSliderHeight();
  }, 400);

  $(window).resize(function(){
    setSliderHeight();
  });



  function setSliderHeight(){
    var sliderHeight = -1;
    $('.testimonial__content').each(function() {
      $(this).removeAttr("style");
      sliderHeight = sliderHeight > $(this).height() ? sliderHeight : $(this).height();
    });

    $('.testimonial__content').each(function() {
      $(this).height(sliderHeight);
      $(".slider").height(sliderHeight);
    });
  }

  $('.testimonials').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });

  $('.slider__btn--prev').click(function(){
    $('.slider').find('.slick-prev').click();
  });

  $('.slider__btn--next').click(function(){
    $('.slider').find('.slick-next').click();
  });
  
  $('.slick-prev, .slick-next').click(function(){
   var slideIndex =  parseInt($('.slick-active').attr('data-slick-index')) + 1;
   $('.product-features__tab').removeClass('active');
   $('.product-features__tab:nth-of-type(' + slideIndex + ')').addClass('active');
  });

})(jQuery);