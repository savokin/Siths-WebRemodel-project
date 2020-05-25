import React from 'react';
import BackgroundSlider from 'react-background-slider' ;

import i1 from '../media/SI1.jpg' ;
import i2 from '../media/SI2.jpg' ;
import i3 from '../media/SI3.jpg' ;
import i4 from '../media/SI4.jpg' ;


const Slide = () =>
    <BackgroundSlider
        images={[i1, i2, i3, i4]}
        duration = {6}
        transition = {2}
    />

export default Slide;