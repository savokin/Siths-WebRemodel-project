import React from 'react';

import i1 from "../media/SI1.jpg";
import i2 from "../media/SI2.jpg";
import i3 from "../media/SI3.jpg";
import i4 from "../media/SI4.jpg";



const Slide = () =>
    <div>
        <div class="Slide fade">
            <img src={i1}></img>
        </div>
        <div class="Slide fade">
            <img src={i2}></img>
        </div>
        <div class="Slide fade">
            <img src={i3}></img>
        </div>
        <div class="Slide fade">
            <img src={i4}></img>
        </div>
        
    </div>
    
    
export default Slide;

