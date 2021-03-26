
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".fixed-top").css('opacity', '80%');
    $(".fixed-top").css('background-color', '#cdd0cb');
    $(".nav-item").css('visibility', 'hidden');
    $("#Home-btn").css('visibility', 'visible');
  } else {
    $(".fixed-top").css('opacity', '100%');
    $(".fixed-top").css('background-color', '');
    $(".nav-item").css('visibility', 'visible');
    $("#Home-btn").css('visibility', 'hidden');
  }
}
