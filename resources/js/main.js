$(document).ready(function(){
     $('.carousel').slick({
       arrows: false,
       slidesToShow: 1,
       autoplay: true,
       autoplaySpeed: 4000,
       draggable: false,
       pauseOnFocus: false,
       pauseOnHover: false
     });

     var scrollToTop = 0;
     $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop - scrollToTop > 50){
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
        scrollToTop = scrollTop;
      } else if (scrollToTop - scrollTop > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        scrollToTop = scrollTop;
      }
    });
   });
