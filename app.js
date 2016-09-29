$(document).ready(function(){
  var index = 0;
  var $next = $("#next");
  var $prev = $("#prev");
  var imgSrc = new Array();

  $("#images").find("li").each(function(){
    imgSrc.push($(this).text());
  });

  $("#slide").attr("src", imgSrc[index]);

  // next function
  function next() {
    index++;

    if (index === imgSrc.length) {
      index = 0;
      $("#slide").attr("src", imgSrc[index]);
    } else {
      $("#slide").attr("src", imgSrc[index]);
    };
  };

  // click on next
  $next.on("click", function() {
    next();
  });

  // previous function
  function prev() {
    index--;

    if (index == -1) {
      index = imgSrc.length - 1;
      $("#slide").attr("src", imgSrc[index]);
    } else {
      $("#slide").attr("src", imgSrc[index]);
    };

  };

  // click on prev
  $prev.on("click", function() {
    prev();
  });
});
