
function sumArray(numArray){
    //reduce method
    // function getSum(accumulator, currentVal){
    //     return accumulator + currentVal;
    // }
    // const answer = numArray.reduce(getSum);
    // return answer;
//////////////
    //normal way
    let answer = 0;
    for(let i = 0; i < numArray.length; i++){
        let adder = numArray[i];
        answer += adder;
    }
    return answer;
}

function fitWithinVal(numArr, numGoal){
//storage output list;
//go through each number in the given numArr;
//during the iteration, compare if it is less than the numGoal;
//if yes, then add it to output list
//if no, then skip num and keep going until there are no more numbers that would fit the conditional
//print out the storage output list;
//storage output list;
    let output = [];
    var index = 0;
    let currentSum = 0;
    while(index < numArr.length){
        let eachNum = numArr[index];
        if(currentSum+eachNum < numGoal){
            currentSum += eachNum;
            output.push(eachNum);
        }
    index++;
    }    
    return output;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
