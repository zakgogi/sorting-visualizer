import React, { useState } from 'react';
import './style.css';
import Slider from '../Slider';


const Visualizer = () => {
    let originalArray = [];
    for (let i = 0; i < 200; i++){
        let randInt = Math.floor(Math.random() * 480 + 20);
        while (originalArray.indexOf(randInt) > -1){
            randInt = Math.floor(Math.random() * 480 + 20);
        }
        originalArray.push(randInt);
    }
    const [ bars, setBars ] = useState(originalArray);
    const [ sliderValue, setSliderValue ] = useState(125);

    const delay = (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    let currentState = bars;
    
    const merge = async (leftArr, rightArr, ms) => {
        await delay(ms);
        let arrCheck = rightArr.concat(leftArr).length;
        //might be a problem if multiple of same value
        let index = currentState.indexOf(rightArr[rightArr.length - 1]);
        // let index = 0;
        // if (currentState.indexOf(rightArr[rightArr.length - 1] === currentState.lastIndexOf(rightArr[rightArr.length-1]))){
        //     index = currentState.indexOf(rightArr[rightArr.length - 1]);
        // } else {
        //     //find the last index within subarray we are comparing
        //     index = currentState.indexOf(rightArr[rightArr.length - 1]);
        // }
        let startIndex = 0;
        let origRight = rightArr;
        for (let j = 0; j < leftArr.length; j++){
            for (let i = startIndex; i < origRight.length; i++){
                if (leftArr[j] <= origRight[i]){
                    rightArr.splice(i, 0, (leftArr[j]));
                    startIndex = i + 1;
                    break;
                } else if (leftArr[j] > rightArr[i] && i === rightArr.length - 1) {
                    let restOfLeftArr = leftArr.slice(j);
                    rightArr = rightArr.concat(restOfLeftArr);
                }
            }
        }

        setBars(bars => {
            let newBars = bars.slice(0);
            let firstIndex = index - arrCheck + 1
            for (let i = 0; i < rightArr.length; i++){
                newBars[firstIndex + i] = rightArr[i]
            }
            currentState = newBars;
            return newBars;
        })

        return rightArr;    
    }
        
    const mergeSort = async (arr, ms) => {

        if (arr.length <= 1){
            return arr;
        }
        let middle = Math.ceil(arr.length/2);
        let leftArr = arr.slice(0, middle);
        let rightArr = arr.slice(middle);
        return await merge( 
            await mergeSort(leftArr, ms),
            await mergeSort(rightArr, ms),
            ms
        )
    }

    const renderBars = () => {
        return bars.map(b => 
            <>
            <div class="arrayBar" style={{height:`${b}px`}}>
            </div>
            </>
        )
    }


    const updateBars = () => {
        mergeSort(bars, sliderValue);
    }


    return (
        <>
            <section id="buttonSection">
                <Slider id="slider" setSliderValue={setSliderValue}/>
                <button onClick = {updateBars}>Merge Sort</button>
            </section>
            <section id="graphSection">
                { renderBars() }
            </section>
        </>
    )
}

export default Visualizer;