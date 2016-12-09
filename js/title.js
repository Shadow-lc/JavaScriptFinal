function onMouseOverBlog(){
    document.getElementById("blog").className="navover";
}
function onMouseOutBlog(){
document.getElementById("blog").className="nav";
}
function onMouseOverLog(){
    document.getElementById("log").className="navover";
}
function onMouseOutLog(){
document.getElementById("log").className="nav";
}
function onMouseOverFlower(){
    document.getElementById("flower").className="navover";
    var menu = document.getElementById("menu");
    menu.style.display = "block";
}
function onMouseOutFlower(){
document.getElementById("flower").className="nav";
        menu.style.display = "none";
}
function onMouseOverAbout(){
    document.getElementById("about").className="navover";
}
function onMouseOutAbout(){
document.getElementById("about").className="nav";
}