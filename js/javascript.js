var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  // get curent active slide navigation button by class name "active"
  var previousSlide = document.getElementsByClassName("active")[0].innerHTML;

  var slides = document.getElementsByClassName("MySlide");
  var button = document.getElementsByClassName("btn");

  if(n > slides.length){slideIndex = 1}
  if(n < 1){slideIndex = slides.length}

  for(var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  // set last active slide navigation button to be deactive by ommit class name "active"
  button[Number(previousSlide) - 1].className = "btn";
  // set current active slide navigation button by add class name "active" 
  button[slideIndex - 1].className = "btn active";
  slides[slideIndex-1].style.display = "block";
}

function changeImage(id){
    let imgPath = document.getElementById(id).getAttribute("src");
    document.getElementById("main-img").setAttribute("src", imgPath);
}