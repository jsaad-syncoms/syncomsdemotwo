function hoverProcess(i) {
    var stageBox = document.getElementsByClassName('processStage');
    var circle = document.getElementsByClassName('circleFill');
    var icon = document.getElementsByClassName('processIcon');
    
    stageBox[i].classList.add('processStageHover');
    circle[i].classList.add('circleFillHover');
    icon[i].classList.add('iconContiHover');
        
    setTimeout(function() {
        stageBox[i].classList.remove('processStageHover');
        circle[i].classList.remove('circleFillHover');
        icon[i].classList.remove('iconContiHover');
    }, 3000);
}



function initHoverProcess() {
    var stageBox = document.getElementsByClassName('processStage');
    
    hoverProcess(0);
    setTimeout(function() {hoverProcess(1);}, 3000);
    setTimeout(function() {hoverProcess(2);}, 6000);
    setTimeout(function() {hoverProcess(3);}, 9000);
    setTimeout(function() {hoverProcess(4);}, 12000);
}

initHoverProcess();

setInterval(initHoverProcess, 15000);