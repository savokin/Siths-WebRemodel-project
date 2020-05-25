import React, {Component} from 'react' ;
import ReactDom from 'react-dom';
import Slide from './Slideshow'

import logo from '../media/Siths_logo.png';
import video from '../media/singvid.mp4';

class App extends Component {

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
                    <Slide />
                </div>
        
             </div>




        )
    }
}

export default App;

