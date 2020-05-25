import React, {Component} from 'react' ;

import Slide from './Slideshow'


class App extends Component {

    render(){
        return(
            <div class="rel-container">
                <div class="header">
                    <img src="media/Siths_logo.png"  alt="logo" class="logo-split" />
                </div>
                <div class="body1">
                    <video src="media/singvid.mp4" autoplay controls muted class="featurevid">

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

