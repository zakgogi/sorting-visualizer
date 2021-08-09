let arr1 = [5, 7, 9, 12]
let arr2 = [6, 10, 15, 20, 28];
let arr3 = [8, 5, 10, 3, 6];

function generateArray(){
    let originalArray = [];
    for (let i = 0; i < 20; i++){
        let randInt = Math.floor(Math.random() * 280 + 20)
        originalArray.push(randInt);
    }
    return originalArray
}

const merge = (leftArr, rightArr) => {
    //left and right arrays are already sorted when received
    console.log('pass:')
    console.log(`merge - leftArr: ${leftArr}`);
    console.log(`merge - rightArr: ${rightArr}`);
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
    console.log(`merge - result: ${rightArr}`);
    return rightArr;    
}
    
const mergeSort = (arr) => {
    if (arr.length <= 1){
        return arr;
    }
    let middle = Math.ceil(arr.length/2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    // console.log(`leftArr: ${leftArr}`)
    // console.log(`rightArr: ${rightArr}`)
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )

}


//want one pass to be returned back on one click, so would hope to receive [5, 8, 10, 3, 6]


// let newArray = generateArray();
// console.log(newArray);
console.log(mergeSort(arr3));

// const spliceTest = (arr) => {
//     for (let i = 0; i < 2; i++){    
//         arr.splice(1, 0, 5);
//     }
//     return arr; 
// }

// console.log(spliceTest(arr1));

// const replaceTest = (arr) => {
//     console.log(typeof(arr))
//     let hello = arr.splice(0);
//     console.log(typeof(hello));
//     return hello

// }

// console.log(replaceTest([1,2,3]));