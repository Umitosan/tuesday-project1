$(document).ready(function() {



  $(".clickable1").click(function() {
    $(".walrus-showing").slideToggle(1000);
    $(".walrus-hidden").fadeToggle(4000);
  });

  $(".clickable2").click(function() {
    $(".walrus-hidden").slideToggle(1000);
    $(".walrus-third").slideToggle(1000);
  });

  $(".clickable3").click(function() {
    $(".walrus-third").slideToggle(1000);
    $(".walrus-showing").slideToggle(1000);
  });



});
