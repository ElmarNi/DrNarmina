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

  if ($(window).width() < 1630) {
    let circleLeft = parseInt($("#slider .circle").css("margin-left").substring(0, 4))
    let defaultWidth = 1630;
    let currentWidth = $(window).width();
    let imageNewleft = defaultWidth - currentWidth
    let circleNewLeft = circleLeft - (defaultWidth - currentWidth);
    $("#slider .circle").css("margin-left", `${circleNewLeft}px`)
    $("#slider .main-image").css("margin-left", `-${imageNewleft}px`)
  }
  $("#blog .like").click(function(e){
    e.preventDefault()
    $(this).toggleClass("active")
  })
});