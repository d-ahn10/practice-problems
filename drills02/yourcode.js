

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
    let minVal = Math.min(numArr)

}

function findMode(){

}
