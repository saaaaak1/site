// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//       $('header').css('opacity', 0.9);
//     } else {
//       $('header').css('opacity', 1);
//     }
//   });
// });

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  $('.carousel').carousel({
    interval: 3000,
    pause: "hover",
    wrap: true,
    keybord: true
  });

  function scroll_effect(){
   $('.effect-fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }
};




