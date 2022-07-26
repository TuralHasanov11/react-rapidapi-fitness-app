/* eslint-disable no-shadow */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import $ from 'jquery';

(function () {
  const mobileMenuOutsideClick = function () {
    $(document).click((e) => {
	    const container = $('#fh5co-offcanvas, .js-fh5co-nav-toggle');
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($('body').hasClass('offcanvas-body')) {
    			$('body').removeClass('offcanvas-body');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
    });
  };

  const offcanvasMenu = function () {
    $('#page').prepend('<div id="fh5co-offcanvas" />');
    $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    const clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    const clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas')
      .find('li')
      .removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function () {
      const $this = $(this);

      $this
        .addClass('active')
        .find('ul')
        .slideDown(500, 'easeOutExpo');
    }).mouseleave(function () {
      const $this = $(this);
      $this
        .removeClass('active')
        .find('ul')
        .slideUp(500, 'easeOutExpo');
    });

    $(window).resize(() => {
      if ($('body').hasClass('offcanvas-body')) {
        $('body').removeClass('offcanvas-body');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  const burgerMenu = function () {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      const $this = $(this);

      if ($('body').hasClass('overflow offcanvas-body')) {
        $('body').removeClass('overflow offcanvas-body');
      } else {
        $('body').addClass('overflow offcanvas-body');
      }
      $this.toggleClass('active');
      event.preventDefault();
    });
  };

  // var contentWayPoint = function() {
  // 	var i = 0;
  // 	$('.animate-box').waypoint( function( direction ) {

  // 		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

  // 			i++;

  // 			$(this.element).addClass('item-animate');
  // 			setTimeout(function(){

  // 				$('body .animate-box.item-animate').each(function(k){
  // 					var el = $(this);
  // 					setTimeout( function () {
  // 						var effect = el.data('animate-effect');
  // 						if ( effect === 'fadeIn') {
  // 							el.addClass('fadeIn animated-fast');
  // 						} else if ( effect === 'fadeInLeft') {
  // 							el.addClass('fadeInLeft animated-fast');
  // 						} else if ( effect === 'fadeInRight') {
  // 							el.addClass('fadeInRight animated-fast');
  // 						} else {
  // 							el.addClass('fadeInUp animated-fast');
  // 						}

  // 						el.removeClass('item-animate');
  // 					},  k * 200, 'easeInOutExpo' );
  // 				});

  // 			}, 100);

  // 		}

  // 	} , { offset: '85%' } );
  // };

  const dropdown = function () {
    $('.has-dropdown').mouseenter(function () {
      const $this = $(this);
      $this
        .find('.dropdown')
        .css('display', 'block')
        .addClass('animated-fast fadeInUpMenu');
    }).mouseleave(function () {
      const $this = $(this);

      $this
        .find('.dropdown')
        .css('display', 'none')
        .removeClass('animated-fast fadeInUpMenu');
    });
  };

  const goToTop = function () {
    $('.js-gotop').on('click', (event) => {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top,
      }, 500, 'easeInOutExpo');

      return false;
    });

    $(window).scroll(() => {
      const $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };

  // Loading page
  const loaderPage = function () {
    $('.fh5co-loader').fadeOut('slow');
  };

  const tabs = function () {
    // Auto adjust height
    $('.fh5co-tab-content-wrap').css('height', 0);
    const autoHeight = function () {
      setTimeout(() => {
        const tabContentWrap = $('.fh5co-tab-content-wrap');
        const tabHeight = $('.fh5co-tab-nav').outerHeight();
        const formActiveHeight = $('.tab-content.active').outerHeight();
        const totalHeight = parseInt(tabHeight + formActiveHeight + 90, 10);

        tabContentWrap.css('height', totalHeight);

        $(window).resize(() => {
          const tabContentWrap = $('.fh5co-tab-content-wrap');
          const tabHeight = $('.fh5co-tab-nav').outerHeight();
          const formActiveHeight = $('.tab-content.active').outerHeight();
          const totalHeight = parseInt(tabHeight + formActiveHeight + 90, 10);

          tabContentWrap.css('height', totalHeight);
        });
      }, 100);
    };

    autoHeight();

    // Click tab menu
    $('.fh5co-tab-nav a').on('click', function (event) {
      const $this = $(this);
      const tab = $this.data('tab');

      $('.tab-content')
        .addClass('animated-fast fadeOutDown');

      $('.fh5co-tab-nav li').removeClass('active');

      $this
        .closest('li')
        .addClass('active');

      $this
        .closest('.fh5co-tabs')
        .find(`.tab-content[data-tab-content="${tab}"]`)
        .removeClass('animated-fast fadeOutDown')
        .addClass('animated-fast active fadeIn');

      autoHeight();
      event.preventDefault();
    });
  };

  $(() => {
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    dropdown();
    goToTop();
    loaderPage();
    tabs();
  });
}());
