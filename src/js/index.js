import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import App from './App';



ReactDOM.render(<App />, document.getElementById('root'));

var slide = 0;

function displaySl(){
    var i;
    var slides = document.getElementsByClassName("Slide");
    console.log(slides);
    console.log("bruh");
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