var slide = 0;

function displaySl(){
    var i;
    var slides = document.getElementsByClassName("Slide");
    
    for (i =0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slide++;
    if(slide > slides.length){
        slide = 1;
    }
    slides[slide-1].style.display = "block";
    setTimeout(displaySl, 2345);
}

displaySl();