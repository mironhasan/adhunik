//menu hover active when click any menu button
$(".nav-item").on('click', function(){
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});




//for navbar fixed when scrlling
$(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 130) {
        $(".menu_head").addClass("menu_fixed");
    }else {
        $(".menu_head").removeClass("menu_fixed");
    }
});




//prealoader js
window.addEventListener("load", function(){
    
    var preload = document.querySelector(".preloader");
    
    preload.classList.add("load_finish");
});





//for back to top button show and hide when scrolling
$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    
    if(scroll > 1000){
        $(".top_btn i").show();
    }else{
        $(".top_btn i").hide();
    }
});




//demo page banner slider js
$('.demo_banner_pic').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





//demo page banner slider js
$('.demo_theme_main').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


