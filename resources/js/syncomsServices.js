var serviceNames = document.getElementsByClassName('serviceName');
var serviceDescs = document.getElementsByClassName('serviceDesc');
var syncomsServices = document.getElementById('syncoms-services');

var bgs = ["designDesc", "W2PDesc", "devDesc", "marketingDesc"];

function displaySlide(n) {
    serviceDescs[n].classList.remove('noDisplay');
    serviceNames[n].classList.add('noFilter');
//    syncomsServices.classList.add(bgs[n]);
    
    for (i=0; i<serviceDescs.length; i++) {
        if (i !== n && serviceDescs[i].classList.contains('noDisplay') == false) {
            serviceDescs[i].classList.add('noDisplay');
            serviceNames[i].classList.remove('noFilter');
//            syncomsServices.classList.remove(bgs[i]);
        }
    }
}

var interval = setInterval(startSlideShow, 10000);

function stopSlides() {
    clearInterval(interval);
}

serviceNames[0].addEventListener('click', function() {displaySlide(0); stopSlides();}, false);
serviceNames[1].addEventListener('click', function() {displaySlide(1); stopSlides();}, false);
serviceNames[2].addEventListener('click', function() {displaySlide(2); stopSlides();}, false);
serviceNames[3].addEventListener('click', function() {displaySlide(3); stopSlides();}, false);

function startSlideShow() {
    displaySlide(0);
    setTimeout(function(){displaySlide(1);}, 2500);
    setTimeout(function(){displaySlide(2);}, 5000);
    setTimeout(function(){displaySlide(3);}, 7500);
}

startSlideShow();

//setInterval(startSlideShow, 10000);