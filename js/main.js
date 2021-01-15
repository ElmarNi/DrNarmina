$(document).ready(function () {
  $("#large-screen-header .lang").click(function (e) { 
    e.preventDefault()
    $(this).find("ul").toggle()
    $(this).find("svg").toggleClass("active")
    $(this).find("a").toggleClass("active")
  })
  $('#slider .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav: true
  })
  $("#slider .content").css("left", `${(window.innerWidth - $("#large-screen-header .container").width()) / 2}px`)
  $(window).scroll(function () { 
    if ($(window).scrollTop() > 60) {
      $("#large-screen-header").addClass("active")
    }
    else{
      $("#large-screen-header").removeClass("active")
    }
  });
});