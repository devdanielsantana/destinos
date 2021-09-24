// Menu scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
