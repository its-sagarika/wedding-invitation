const responsive1 = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  920: {
    items: 3
  }
}

const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 1
  },
  920: {
    items: 3
  }
}



$(document).ready(function () {

  $('.timer-area .timer-content .timer').countdown('2021/02/14', function (event) {
    $(this).html(event.strftime(
      '<div><span>%m</span><div>Months</div></div>'
      + '<div><span>%d</span><div>Days</div></div>'
      + '<div><span>%H</span><div>Hours</div></div>'
      + '<div><span>%M</span><div>Minutes</div></div>'
    ));
  });

  var bride = $('#bridemates');
  var groom = $("#groommates");
  var blog = $("#blogcarousel");
  var navigation = $(".card-theme");

  groom.owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.groom-navigation .owl-nav-prev'), $('.groom-navigation .owl-nav-next')],
    responsive: responsive1
  });


  bride.owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.bride-navigation .owl-nav-prev'), $('.bride-navigation .owl-nav-next')],
    responsive: responsive1
  });

  blog.owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dotsEach: true,
    nav: true,
    navText: [$('#blog-nav .owl-nav-prev i'), $('#blog-nav .owl-nav-next i')],
    responsive: responsive
  });


  let nav_offset_top = $('.header-area .main-menu .navbar').height() + 50;

  function navbarFixed() {
    if ($('.header-area .main-menu .navbar').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header-area .main-menu .navbar').addClass('navbar_fixed');

          document.getElementById("brand-img").src = "./assets/logo-color-large.png";

        }
        else {
          $('.header-area .main-menu .navbar').removeClass('navbar_fixed');
          document.getElementById("brand-img").src = "./assets/loro-trans-large.png";

        }
      })
    }
  }

  navbarFixed();


  $('.header-area .main-menu .navbar-nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {
      //I get fired when the animation is starting
    },
    end: function () {
      //I get fired when the animation is ending
    },
    scrollChange: function ($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });


});

