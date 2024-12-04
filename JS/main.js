$(document).ready(function () {
  
  $('.launching-countries').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.launched-stores').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.top-offers-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.best-sellers').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.full-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.offers').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnDotsHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// Odering Page
  // $('.simpleslider').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
  //   nextArrow: '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
    

  // Wrap-16 button click toggle 
  $(".wrap-16 .outlets").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(".wrap-16 .city-outer").css("height", "auto");
        $(this).text("View Less Outlets");
    } else {
        $(".wrap-16 .city-outer").css("height", "210px");
        $(this).text("View All Outlets");
    }
  });


  // cart
  $('.cart-button .btn').on('click', function() {
    // Hide the empty cart message
    $('#empty-cart').addClass('d-none');

    // Show the cart item total section
    $('#add-cart').removeClass('d-none');
  });


  
  // checkout
  $('#openModal').click(function() {
    $('#myModal').fadeIn();  
  });
  // Close the button
  $('#closeModal').click(function() {
    $('#myModal').fadeOut();  
  });

  // Open New Address 
  $('#addNewAddress').click(function() {
    $('#myModal').fadeOut();
    $('#newAddress').fadeIn();  
  });

  // BackButton
  $('#backBtn').click(function() {
    $('#newAddress').fadeOut();
  });

  // Search Location Manually
  $('#selectManualArea').click(function() {
    $('#newAddress').fadeOut();
    $('#SearchLocation').fadeIn();
  });

  // Close Secrch Location
  $('#closeSearchLocation').click(function() {
    $('#SearchLocation').fadeOut();
  });

  // Detail Address
  $('.selectLocalities').click(function() {
    $('#SearchLocation').fadeOut();
    $('#fullAddress').fadeIn();
  });

  // Close Detail Button
  $('#closeDetailsBtn').click(function() {
    $('#fullAddress').fadeOut();
  });

  // Apply Coupon
  $('#moreOffers').click(function() {
    $('#coupon').fadeIn();
  });
  // close button
  $('#circleBackBtn').click(function() {
    $('#coupon').fadeOut();
  });

  
});