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

  $(".slider__btn").click(function(){
    if($(this).hasClass("slider__btn--prev")){
      switchSlide("prev");
    }else{
      switchSlide("next");
    }
  });

  $(".slider__slide").click(function(){
    if($(this).hasClass("slider__slide--left")){
      switchSlide("prev");
    }else if($(this).hasClass("slider__slide--right")){
      switchSlide("next");
    }
  });

  $(".btn--slider-tab").click(function(){
    $(".btn--slider-tab").each(function(){
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    var slideTabIndex = $(this).closest('li').index() + 1;
    var targetSlide = $(".slider__slide:nth-of-type(" + slideTabIndex + ")");
    if(targetSlide.hasClass("slider__slide--left")){
      switchSlide("prev");
    }else if(targetSlide.hasClass("slider__slide--right")){
      switchSlide("next");
    }
  });

  function setSliderHeight(){
    var sliderHeight = -1;
    $('.testimonial').each(function() {
      $(this).removeAttr("style");
      sliderHeight = sliderHeight > $(this).height() ? sliderHeight : $(this).height();
    });

    $('.testimonial').each(function() {
      $(this).height(sliderHeight);
      $(".slider").height(sliderHeight);
    });
  }

  function switchSlide(direction){
    $(".active").removeClass("active");
    if(direction == "prev"){
      $(".slider__slide--left").addClass("active").removeClass("slider__slide--left");
    }else{
      $(".slider__slide--right").addClass("active").removeClass("slider__slide--right");
    }
    if($(".active").is(":first-child")){
      $(".slider__tab:nth-of-type(1)").find("button").addClass("active");
      $(".slider__slide:nth-of-type(2)").addClass("slider__slide--right").removeClass("slider__slide--left");
      $(".slider__slide:nth-of-type(3)").addClass("slider__slide--left").removeClass("slider__slide--right");
    }else if($(".active").is(":last-child")){
      $(".slider__tab:nth-of-type(3)").find("button").addClass("active");
      $(".slider__slide:nth-of-type(1)").addClass("slider__slide--right").removeClass("slider__slide--left");
      $(".slider__slide:nth-of-type(2)").addClass("slider__slide--left").removeClass("slider__slide--right");
    }else{
      $(".slider__tab:nth-of-type(2)").find("button").addClass("active");
      $(".slider__slide:nth-of-type(1)").addClass("slider__slide--left").removeClass("slider__slide--right");
      $(".slider__slide:nth-of-type(3)").addClass("slider__slide--right").removeClass("slider__slide--left");
    }
  }

})(jQuery);