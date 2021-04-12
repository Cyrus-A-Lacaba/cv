window.onload = function() {$("a.float").addClass("home-visibility")};
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".navbar").addClass("page-scrolling");
    $(".navbar").removeClass("bg-light");
    $("a.float").removeClass("home-visibility");
  } else {
    $(".navbar").removeClass("page-scrolling");
    $("a.float").addClass("home-visibility");
  }
}

$(".skills-bar").mousedown(function(){
  $(".skills-bar").addClass("animate-skills");
});

$(".skills-bar").mouseup(function(){
  $(".skills-bar").removeClass("animate-skills");
});
