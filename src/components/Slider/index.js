import React, { useState } from 'react';
import './style.css';

const Slider = ({ setSliderValue }) => {
    
    const [sliderValue, setChildSliderValue ] = useState(125);

    const changeValue = (e) => {
        console.log(e);
        let newVal = e.target.value;
        setChildSliderValue(newVal);
        setSliderValue(newVal);
    }


    return (
        <div class="sliderContainer">
            <p>{sliderValue}</p>
            <input class="slider" onChange={changeValue} type="range" min="50" max="200" value={sliderValue}></input>
        </div> 
    )
}

export default Slider;