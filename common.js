window.onload = function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
        $('#iframeAudio').remove();
    }
    else{
        $('#audioAudio').remove();
    }
}
