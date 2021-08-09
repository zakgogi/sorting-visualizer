const merge = async (leftArr, rightArr, ms) => {
    await delay(ms);
    // let currentState = bars.slice(0);
    console.log('pass:')
    // useEffect(() => {
    //     console.log(bars);
    // }, [bars])
    // console.log(bars);
    console.log(`rightArray: ${rightArr}`);
    console.log(`leftArray: ${leftArr}`);
    let arrCheck = rightArr.concat(leftArr).length;
    //might be a problem if multiple of same value
    console.log(`currentState: ${currentState}`);
    let index = currentState.indexOf(rightArr[rightArr.length - 1]);
    // let index = 0;
    // if (currentState.indexOf(rightArr[rightArr.length - 1] === currentState.lastIndexOf(rightArr[rightArr.length-1]))){
    //     index = currentState.indexOf(rightArr[rightArr.length - 1]);
    // } else {
    //     //find the last index within subarray we are comparing
    //     index = currentState.indexOf(rightArr[rightArr.length - 1]);
    // }
    console.log(`lengthToCheck: ${arrCheck}`);
    console.log(`indexOfFurthestElement: ${index}`);
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
        console.log(newBars);
        currentState = newBars;
        return newBars;
    })

    console.log(`finalArr: ${rightArr}`);
    
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

export default { merge, mergeSort };