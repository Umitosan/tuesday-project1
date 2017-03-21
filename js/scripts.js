$(document).ready(function() {



  $(".clickable1").click(function() {
    $(".walrus-showing").fadeOut();
    $(".walrus-hidden").fadeIn();
  });

  $(".clickable2").click(function() {
    $(".walrus-hidden").fadeOut();
    $(".walrus-third").fadeIn();
  });

  $(".clickable3").click(function() {
    $(".walrus-third").fadeOut();
    $(".walrus-showing").fadeIn();
  });



});
