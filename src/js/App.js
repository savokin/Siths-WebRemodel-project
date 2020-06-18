import React, {Component} from 'react' ;
import ReactDom from 'react-dom';
import Slide from './Slideshow'

import logo from '../media/Siths_logo.png';
import video from '../media/singvid.mp4';

class App extends Component {
    /*componentDidMount(){
        const slscript = document.createElement("script");
        slscript.async = false;
        slscript.src = "slidescript.js";


        document.body.appendChild(slscript);
    }
    */
    render(){
        return(
            <div class="rel-container">
                <div class="header">
                    <img src={logo}  alt="logo" class="logo-split" />
                </div>
                <div class="body1">
                    <video src={video} autoPlay loop controls muted class="featurevid">

                    </video>
                </div>
                <div class="body2">
                    <div class="announsment-window">
                        Principal's Message






                        Bottom Text
                    </div>
                
                    <Slide />
                    
                </div>
        
             </div>




        )
    }
}

export default App;

