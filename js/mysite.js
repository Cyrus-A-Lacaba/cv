var i;
window.onload = function() {
  $("a.float").addClass("home-visibility")
  $(".to-collapse").slideUp();
};
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("a.float").fadeIn();
  } else {
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
    toggleArrow("td.company.co0" + i + " i");
  });

  $(".co0" + i).on("tap",function(){
    $("tr.co0" + i).slideToggle();
    toggleArrow("td.company.co0" + i + " i");
  });
}

for (let i=1;i < 5;i++) {
  $(".ed0" + i).on("click",function(){
    $("tr.ed0" + i).slideToggle();
    toggleArrow("td.company.ed0" + i + " i");
  });

  $(".ed0" + i).on("tap",function(){
    $("tr.ed0" + i).slideToggle();
    toggleArrow("td.company.ed0" + i + " i");
  });
}

function toggleArrow(classVal) {
  if ($(classVal).hasClass("fa-angle-down")) {
    $(classVal).removeClass("fa-angle-down");
    $(classVal).addClass("fa-angle-up");
    return;
  }

  if ($(classVal).hasClass("fa-angle-up")) {
    $(classVal).removeClass("fa-angle-up");
    $(classVal).addClass("fa-angle-down");
    return;
  }
}
