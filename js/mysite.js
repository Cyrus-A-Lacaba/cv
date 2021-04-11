
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".fixed-top").css('opacity', '90%');
      $(".fixed-top").css('background-color', '#a1cae2');
    $("#Home-btn").css('visibility', 'visible');
  } else {
    $(".fixed-top").css('opacity', '100%');
      $(".fixed-top").css('background-color', '');
    $("#Home-btn").css('visibility', 'hidden');
  }
}
