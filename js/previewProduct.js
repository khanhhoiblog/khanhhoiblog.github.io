function changeImage(id){
    var imgPath = document.getElementById(id).getAttribute("src");
    document.getElementById("main-img").setAttribute("src", imgPath);
}