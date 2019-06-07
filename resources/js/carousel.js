var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel-cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  togglePerspective();
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  togglePerspective();
  rotateCarousel();
});

function changeCarousel() {
  cellCount = cells.length;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

changeCarousel();

setInterval(function() {selectedIndex++; rotateCarousel();}, 7000);

var sceneWidth = $('.scene').width();
$('.carousel-options').width(sceneWidth);

var sceneHeight = $('.scene').height();
$('.carousel-options').height(sceneHeight);

$(window).resize(function() {var sceneWidth = $('.scene').width(); $('.carousel-options').width(sceneWidth);});

function togglePerspective() {
    var scene = document.getElementById('scene');
    
    if (scene.classList.contains('noPerspective')) {
        scene.classList.remove('noPerspective');
        setTimeout(function(){scene.classList.add('noPerspective');}, 950);
    } else {
        scene.classList.add('noPerspective');
    }
}

function toggleButtonsAbility() {
    nextButton.removeEventListener('click', function(){
        selectedIndex++;
        togglePerspective();
        rotateCarousel();
    });
    
    prevButton.removeEventListener( 'click', function() {
        selectedIndex--;
        togglePerspective();
        rotateCarousel();
    });
    
    setTimeout(function(){
        nextButton.addEventListener( 'click', function() {
            selectedIndex++;
            togglePerspective();
            rotateCarousel();
        });
        
        prevButton.addEventListener( 'click', function() {
            selectedIndex--;
            togglePerspective();
            rotateCarousel();
        });
    }, 2000);
}

togglePerspective();
setInterval(togglePerspective, 7000);
//setInterval(toggleButtonsAbility, 6500);