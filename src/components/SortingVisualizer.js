import React, { useState } from 'react';
import './SortingVisualizer.css';

const VizualizerBars = () => {
    let originalArray = [];
    for (let i = 0; i < 200; i++){
        let randInt = Math.floor(Math.random() * 280 + 20)
        originalArray.push(randInt);
    }
    const [ bars, setBars ] = useState(originalArray);
    const renderBars = () => {
        return bars.map(b => <div class="arrayBar" style={{height:`${b}px`}}></div>)
    }
    return (
        <section id="graphSection">
            { renderBars() }
        </section>
    )
}

export default VizualizerBars;