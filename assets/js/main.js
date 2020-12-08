(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
  
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};


//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


/*if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}*/


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}




if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

    if( $('.hm-pro-slider').length ){
      $('.hm-pro-slider').slick({
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 8000,
        dots: true,
        arrows:true,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.hm-pro-slider-ctlr .fl-prv-nxt .fl-prev'),
        nextArrow: $('.hm-pro-slider-ctlr .fl-prv-nxt .fl-next'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          /*{
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },*/
          /*{
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }*/
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }

        if( $('#sidebar').length ){
        $('#sidebar').stickySidebar({
            topSpacing: 100,
            bottomSpacing: 60
        });
      }

      $('.hdr-rgt-btm-menu-search button').on('click', function(){
        $('.hdr-rgt-btm-menu-search').toggleClass('src-hide-show');
      });

      if ($('#catapultCookie').length) {
        $('#catapultCookie').on('click', function(e){
          e.preventDefault();
          $('#catapult-cookie-bar').hide('slow');
        });
      }

      $('.about-top-skew').css("border-right-width", windowWidth);
      $('.about-btm-skew').css("border-right-width", windowWidth);
      $('.google-map-top-skew').css("border-left-width", windowWidth);
      $('.nw-about-top-skew').css("border-left-width", windowWidth);
      $('.nw-about-btm-skew').css("border-right-width", windowWidth);
      $('.nw-img-btm-skew').css("border-left-width", windowWidth);

      $(window).resize(function(){
        $('.about-top-skew').css("border-right-width", windowWidth);
        $('.about-btm-skew').css("border-right-width", windowWidth);
        $('.google-map-top-skew').css("border-left-width", windowWidth);
        $('.nw-about-top-skew').css("border-left-width", windowWidth);
        $('.nw-about-btm-skew').css("border-right-width", windowWidth);
        $('.nw-img-btm-skew').css("border-left-width", windowWidth);
      });


      /*particles js*/
      if( $('#particles-js').length ){
          particlesJS("particles-js",{
          "particles": {
             "number": {
                "value": 180,
                "density": {
                  "enable": true,
                  "value_area": 900
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#4d5665"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
             "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 8,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#fff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
           "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
             "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 300,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
               "repulse": {
                  "distance": 300,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          });
      }


        
        var windowWidth = $(window).width();
          var containerWidth = $('.container').width();
          var bothSideWidth = windowWidth - containerWidth;
          var lftoffset = bothSideWidth / 2;

          $('.nw-search-lft-bg').css('width', lftoffset);


        $(window).resize(function(){
          var windowWidth = $(window).width();
          var containerWidth = $('.container').width();
          var bothSideWidth = windowWidth - containerWidth;
          var lftoffset = bothSideWidth / 2;

          $('.nw-search-lft-bg').css('width', lftoffset);
        });


        $('.quantity').each(function() {
          var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.plus'),
            btnDown = spinner.find('.minus'),
            min = 1,
            max = input.attr('max');

          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });

          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });

        });


        if (windowWidth <= 991) {
          $('.ftr-top-menu-col h6').on('click', function(){
            $(this).toggleClass('active');
            $(this).parent().siblings().find('h6').removeClass('active');
            $(this).parent().find('ul').slideToggle(300);
            $(this).parent().siblings().find('ul').slideUp(300);
          });

        }


        if (windowWidth <= 991) {
          $('.humberger-icon').on('click', function(e){
            $('.xs-menu-ctlr').toggleClass('opacity-1');
            $('.bdoverlay').toggleClass('active');
            $('body').toggleClass('active-scroll-off');
            $(this).toggleClass('active-collapse');
          });
          /*$('.close-btn-icon').on('click', function(e){
            $('.bdoverlay').removeClass('active');
            $('.xs-menu-ctlr').removeClass('opacity-1');
            $('body').removeClass('active-scroll-off');
          });*/
          $('li.menu-item-has-children > a').on('click', function(e){
              e.preventDefault();
            //$('li.menu-item-has-children .sub-menu').slideUp(300);
            $(this).next().slideToggle(300);
            $(this).toggleClass('sub-menu-active');
            
          });
          /*$('li.menu-item-has-children > a ul.sub-menu li.menu-item-has-children a').on('click', function(e){
              e.preventDefault();
            //$('li.menu-item-has-children .sub-menu').slideUp(300);
            $(this).next().slideToggle(300);
            $(this).toggleClass('sub-menu-active');
            
          });*/

        }


        if (windowWidth <= 767){
          if( $('.rlztnSlider').length ){
            $('.rlztnSlider').slick({
              dots: true,
              arrows: true,
              infinite: false,
              autoplay: false,
              autoplaySpeed: false,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: $('.rlztn-slider-ctlr .fl-prv-nxt .fl-prev'),
              nextArrow: $('.rlztn-slider-ctlr .fl-prv-nxt .fl-next')
            });
          };
        }

        if (windowWidth <= 767) {
          $('.xs-pro-filter h3').on('click', function(){
            $(this).toggleClass('active');
            $(this).parent().siblings().find('h3').removeClass('active');
            $(this).parent().find('ul').slideToggle(300);
            $(this).parent().siblings().find('ul').slideUp(300);
          });

        }
      
      



    new WOW().init();

})(jQuery);