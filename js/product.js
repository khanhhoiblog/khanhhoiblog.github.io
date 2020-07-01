function changeProductList(type, element){
    var tabs = document.getElementsByClassName("tab-item");
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.background = "#b14c38";
    }
    element.style.background = "#ee4d2d";
    document.getElementById(type).style.display = "block";
    switch(type){
        case 'new':
            document.getElementById('trend').style.display = "none";
            document.getElementById('best-sale').style.display = "none";
            break;
        case 'trend':
            document.getElementById('new').style.display = "none";
            document.getElementById('best-sale').style.display = "none";
            break;
        case 'best-sale':
            document.getElementById('trend').style.display = "none";
            document.getElementById('new').style.display = "none";
            break;
    }
}