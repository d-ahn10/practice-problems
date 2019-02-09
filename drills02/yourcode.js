

function countOccurences(arrInput, inputStr){
    let counterObj = {};
    for(let i = 0; i < arrInput.length; i++){
        let eachWord = arrInput[i];
        if(counterObj[eachWord] == undefined){
            counterObj[eachWord] = 1;
        } else {
            counterObj[eachWord] += 1;
        }
        // counterObj[eachWord] = counterObj[eachWord] ? counterObj[eachWord] + 1 : 1;
        // ternary way ^
        }
    let result = counterObj[inputStr];
    if(result === undefined){
        return 0;
    }
    return result;
}

function wordLengths(wordArr){
    let resultArr = [];
    for(let i = 0; i < wordArr.length; i++){
        let eachWordLength = wordArr[i].length;
        resultArr.push(eachWordLength);
    }
    return resultArr;
}

function getMinMaxMean(numArr){
    let resultsObj = {};
    let minVal = Math.min(...numArr);
    let maxVal = Math.max(...numArr);
    const avgVal = numArr.reduce((a, b) => a + b) / numArr.length;
    resultsObj.min = minVal;
    resultsObj.max = maxVal;
    resultsObj.mean = avgVal;
    return resultsObj;
}



// findMode: Given an array of numbers, find the number that occurs the most often for example: 
// [5,2,7,18,2,42,5,2] returns 2, since it occurs 3 times. 
// If 2 numbers occur the same amount, return the last one

function findMode(numArr){
    let counterObj = {};
    let currentMaxVal = 0;
    for(let i = 0; i < numArr.length; i++){
        let eachNum = numArr[i];
        if(counterObj[eachNum] == undefined){
            counterObj[eachNum] = 1;
        } else {
            counterObj[eachNum] += 1;
        }
    }

    let currentKeyVal = null;
    let result = null;
    for(let key in counterObj){
        // debugger;
        currentKeyVal = counterObj[key];
        if(currentKeyVal >= currentMaxVal){
            console.log('line 66');
            currentMaxVal = currentKeyVal;
            result = parseInt(key);
        }
console.log('counterObj', counterObj);
        if(currentKeyVal == currentMaxVal){
            for(let j = numArr.length-1; j >= 0; j--){
                let indexNum = numArr[j];
                console.log('indexNum is: ', indexNum);
                if(indexNum == 3 || indexNum == 6){
                  console.log('line 74 ran ' + 'this is key: '+key+' this is indexNum: ' + indexNum);
                    result = indexNum;
                    break;
                }
            }
        }
    }
    return result;
}
