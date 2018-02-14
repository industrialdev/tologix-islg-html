(function($){
  var prevLocation;

  var videoSrc = '';

  // Manages opening of popup modals
  $('*[data-popup]').click(function(event){
    prevLocation = $(this);
    var target = '#' + $(this).attr('data-popup');
    $('body').addClass('popup--open');
    $('body').append('<div class="popup__overlay"></div>');
    $(target).fadeIn('fast');
    $('.popup__overlay').fadeIn('fast');
    $(target).find('.popup__close').focus();
    if($(target).find('.video').length){
      videoSrc = $(target).find(".video")[0].src;
      $(target).find(".video")[0].src += "&autoplay=1";
    }
    event.preventDefault();
  });

  // Manages closing of popup modals
  $(document).on('click', '.popup__close, .popup__overlay', function(){
    var target = $('.popup[style="display: block;"]');
    $('body').removeClass('popup--open');
    $('.popup__overlay').remove();
    target.hide();
    if(target.find('.video').length){
      $(target).find(".video")[0].src = videoSrc;
    }   
    prevLocation.focus();
  });

})(jQuery);