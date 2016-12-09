function onMouseOverZLL() {
    $("#ziluolan").animate({
        height: '350px',
        width: '350px'
    });
    document.getElementById("ziluolan").className = "photosover";
    document.getElementById("moli").className = "photosover";
    document.getElementById("zhizihua").className = "photosover";
    document.getElementById("liuyuexue").className = "photosover";
}

function onMouseOutZLL() {
    $("#ziluolan").animate({
        height: '290px',
        width: '290px'
    });
    document.getElementById("ziluolan").className = "photos";
    document.getElementById("moli").className = "photos";
    document.getElementById("zhizihua").className = "photos";
    document.getElementById("liuyuexue").className = "photos";
}

function onMouseOverML() {
    $("#moli").animate({
        height: '350px',
        width: '350px'
    });
    document.getElementById("ziluolan").className = "photosover";
    document.getElementById("moli").className = "photosover";
    document.getElementById("zhizihua").className = "photosover";
    document.getElementById("liuyuexue").className = "photosover";
}

function onMouseOutML() {
    $("#moli").animate({
        height: '290px',
        width: '290px'
    });
    document.getElementById("ziluolan").className = "photos";
    document.getElementById("moli").className = "photos";
    document.getElementById("zhizihua").className = "photos";
    document.getElementById("liuyuexue").className = "photos";
}

function onMouseOverZZH() {
    $("#zhizihua").animate({
        height: '350px',
        width: '350px'
    });
    document.getElementById("ziluolan").className = "photosover";
    document.getElementById("moli").className = "photosover";
    document.getElementById("zhizihua").className = "photosover";
    document.getElementById("liuyuexue").className = "photosover";
}

function onMouseOutZZH() {
    $("#zhizihua").animate({
        height: '290px',
        width: '290px'
    });
    document.getElementById("ziluolan").className = "photos";
    document.getElementById("moli").className = "photos";
    document.getElementById("zhizihua").className = "photos";
    document.getElementById("liuyuexue").className = "photos";
}

function onMouseOverLYX() {
    $("#liuyuexue").animate({
        height: '350px',
        width: '350px'
    });
    document.getElementById("ziluolan").className = "photosover";
    document.getElementById("moli").className = "photosover";
    document.getElementById("zhizihua").className = "photosover";
    document.getElementById("liuyuexue").className = "photosover";
}

function onMouseOutLYX() {
    $("#liuyuexue").animate({
        height: '290px',
        width: '290px'
    });
    document.getElementById("ziluolan").className = "photos";
    document.getElementById("moli").className = "photos";
    document.getElementById("zhizihua").className = "photos";
    document.getElementById("liuyuexue").className = "photos";
}

function onMouseOverLeft() {
    $("#mohuleft").fadeOut(3000);
}

function onMouseOutLeft() {
    $("#mohuleft").fadeIn(3000);
}

function onMouseOverRight() {
    $("#mohuright").fadeOut(3000);
}

function onMouseOutRight() {
    $("#mohuright").fadeIn(3000);
}