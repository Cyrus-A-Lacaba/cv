var i;
window.onload = function() {
  $("a.float").addClass("home-visibility")
  $(".to-collapse").slideUp();
};
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".navbar").addClass("page-scrolling");
    $(".navbar").removeClass("bg-light");
    $("a.float").fadeIn();
  } else {
    $(".navbar").removeClass("page-scrolling");
    $("a.float").fadeOut();
  }
}

$(".skills-bar").mousedown(function(){
  $(".skills-bar").addClass("animate-skills");
});

$(".skills-bar").mouseup(function(){
  $(".skills-bar").removeClass("animate-skills");
});

for (let i=1;i < 7;i++) {
  $(".co0" + i).on("click",function(){
    $("tr.co0" + i).slideToggle();
  });

  $(".co0" + i).on("tap",function(){
    $("tr.co0" + i).slideToggle();
  });
}

for (let i=1;i < 5;i++) {
  $(".ed0" + i).on("click",function(){
    $("tr.ed0" + i).slideToggle();
  });

  $(".ed0" + i).on("tap",function(){
    $("tr.ed0" + i).slideToggle();
  });
}
