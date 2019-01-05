
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

    // - fitWithinVal: given an array and a number, sum the array until you reach the number. 
    // keep adding any values that would total below the given value return an array of every number you could 
    // add For example: 
	// - input: [1,100,2,4,5,6], 7) 
    // - return [1,2,4]
    
    let output = 0;
    for(let i = 0; i<numArr.length; i++) {
        let outerNum = numArr[i];
        for(let j = 1; j<numArr.length; j++) {
            let innerNum = numArr[j];
            let compareSum = outerNum + innerNum;
            if(compareSum < numGoal){
                output += compareSum;
                console.log(output);
            } else {
                return 'work done';
            }
        }
    }
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
