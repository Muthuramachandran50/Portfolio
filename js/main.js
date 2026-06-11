(function($) {
    "use strict";
    jQuery(document).ready(function($) {
    
      // Preloader
      $(window).on('load', function () {
        $('#preloader').fadeOut('slow');
        $('body').css({overflow: 'visible'});
      });

  
      /*-------------------------------
        STICKY NAVIGATION
        ---------------------------------*/
      $('.header').sticky({
        topSpacing: 0,
      });
      /*-------------------------------
        SCROLL TO TOP
        ---------------------------------*/
      $.scrollUp({
        scrollText: "<i class='fa fa-rocket'></i>",
        animation: 'fade',
      });
      /*-------------------------------
        Blog Carousel
        ---------------------------------*/
      $('.slider-area').owlCarousel({
        singleItem: true,
        pagination: false,
        autoPlay: true,
        transitionStyle: 'fade',
      });
      /*-------------------------------
        VIDEO PLAYER HOME
        ---------------------------------*/
      $('.video-player').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=O5LmKx0CH2E',
        containment: '#video-container',
        mute: false,
        loop: true,
        startAt: 0,
        showControls: false,
      });
      /*-------------------------------
        SMOOTH SCROLLING
        ---------------------------------*/
      $('.header li.nav-item a').on('click', function (e) {
        var $anchor = $(this);
        var headerH = '48';
        $('html,body')
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px',
            },
            1200,
            'easeInOutExpo'
          );
        e.preventDefault();
      });
      /*-------------------------------
    Skill Js
    ---------------------------------*/
      if (typeof $.fn.knob != 'undefined') {
        $('.knob').each(function () {
          var $this = $(this),
            knobVal = $this.attr('data-rel');
          $this.knob({
            draw: function () {
              $(this.i).val(this.cv + '%');
            },
          });
          $this.closest('.progress-circular').appear(
            function () {
              $({
                value: 0,
              }).animate(
                {
                  value: knobVal,
                },
                {
                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                  },
                }
              );
            },
            {
              accX: 0,
              accY: -150,
            }
          );
        });
      }
      /*-------------------------------
        Blog Carousel
        ---------------------------------*/
      $('.carousel-blog').owlCarousel({
        singleItem: true,
        pagination: true,
        autoPlay: true,
        transitionStyle: 'fade',
      });
      $('.home-banner').owlCarousel({
        singleItem: true,
        pagination: false,
        autoPlay: true,
        transitionStyle: 'fade',
      });
      /*-------------------------------
        Riview Carousel
        ---------------------------------*/
      $('.review-wrap').owlCarousel({
        singleItem: true,
        pagination: true,
        autoPlay: false,
      });
      /*-------------------------------
        Typed Js
        ---------------------------------*/
      $('.element').typed({
        strings: [
          'Cloud Developer.',
          'Software Developer.',
          'Java &amp; SQL Programmer.',
        ],
        typeSpeed: 40,
        loop: true,
      });
      /*-------------------------------
        Brand Carousel
        ---------------------------------*/
      $('.brand-wrap').owlCarousel({
        items: 5,
        center: true,
        loop: true,
        pagination: false,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [767, 3],
      });
      /*-------------------------------
        Portfolio Isotope
        ---------------------------------*/
      $('.portfolio-menu li').on('click', function (e) {
        $('.portfolio-menu li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.grid').isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });
      /*-------------------------------
        Masonary Portfolio
        ---------------------------------*/
      $('.grid').isotope({
        itemSelector: '.grid-item',
        resizesContainer: false,
        layoutMode: 'masonry',
      });

      /*-------------------------------
        Parallax Effect
        ---------------------------------*/
      $('.parallax-bg').parallax('50%', 0.3);
      $('.home-parallax').parallax('50%', 0.4);

      /*-------------------------------
        Counter Js
        ---------------------------------*/
      $('.counter').counterUp({
        delay: 10,
        time: 1000,
      });
    });

const nextSection = document.querySelector('.about-area');
$('.scroll-down').on('click', function (e) {

  const s1coords = nextSection.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY - 70,
    behavior: 'smooth',
  });

});

 $('.bn-video').venobox({
   share: ['facebook', 'twitter', 'download'],
 });
  const toggleNav = document.querySelector('.toggle-wrap');
  toggleNav.addEventListener('click', function () {
    this.classList.toggle('active');
  });


}(jQuery));
