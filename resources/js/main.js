$(function () {
  $(document).scroll(function () {
    $('#topbar').toggleClass('scrolled', $(this).scrollTop() > $('#topbar').height());
    $('.burgerline').toggleClass('scrolled-black', $(this).scrollTop() > $('#topbar').height());
    $('.colour-logo').toggleClass('fullOpacity', $(this).scrollTop() > $('#topbar').height());
    $('.white-logo').toggleClass('noOpacity', $(this).scrollTop() > $('#topbar').height());
  });
});

var burger = document.getElementById('burger');
burger.addEventListener('click', toggleMobileNav, false);

function toggleMobileNav() {
    var nav = document.getElementById('mobileNav');
    var burgerlines = document.getElementsByClassName('burgerline');
    var transformClasses = ["burgerline1Transform", "burgerline2Transform", "burgerline3Transform"];
    
    if (nav.classList.contains('showNav')) {
        nav.classList.remove('showNav');
        
        for (i=0; i<burgerlines.length; i++) {
            burgerlines[i].classList.remove('burgerClicked');
            burgerlines[i].classList.remove(transformClasses[i]);
        }
    } else {
        nav.classList.add('showNav');
        
        for (i=0; i<burgerlines.length; i++) {
            burgerlines[i].classList.add('burgerClicked');
            burgerlines[i].classList.add(transformClasses[i]);
        }
    }
}