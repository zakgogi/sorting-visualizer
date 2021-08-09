import React, { useState } from 'react';
import './style.css';

const Slider = () => {
    
    const [sliderValue, setSliderValue ] = useState(0);

    const changeValue = (e) => {
        let newVal = e.value;
        setSliderValue(newVal);
    }


    return (
        <section class="slidecontainer">
            <input oninput={changeValue} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
            <p>{sliderValue}</p>
        </section>
    )
}

export default Slider;