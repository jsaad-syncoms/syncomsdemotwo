function setOverlayHeight() {
    var videoHeight = $('#productsVideo').height();
    $('#productsPageHeader').height(videoHeight);
    $('#productsOverlay').height(videoHeight);
//    $('#innerPageVideo').height(videoHeight);
}

$(window).resize(function() {
    setOverlayHeight();
})

setTimeout(setOverlayHeight, 50);