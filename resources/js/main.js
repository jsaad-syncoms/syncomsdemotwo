$(function () {
  $(document).scroll(function () {
    $('#topbar').toggleClass('scrolled', $(this).scrollTop() > $('#topbar').height());
    $('.burgerline').toggleClass('scrolled-black', $(this).scrollTop() > $('#topbar').height());
    $('.colour-logo').toggleClass('fullOpacity', $(this).scrollTop() > $('#topbar').height());
    $('.white-logo').toggleClass('noOpacity', $(this).scrollTop() > $('#topbar').height());
  });
});