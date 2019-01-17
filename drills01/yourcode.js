
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
    let index = 0;
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

function getAllNamesShorterThan(nameList, lengthValueGoal){
    //create an empty results output list;
    //go through list of names one by one;
    //check the length of each name by comparing it to the number provided in the 2nd argument
    //if the compared length is shorter than the given value: add the name to the results output list;
    //if no, keep going until done.

    let results = [];

    for(let index = 0; index < nameList.length; index++){
        let currentName = nameList[index];
        let currNameLength = currentName.length;
        if(currNameLength < lengthValueGoal){
            results.push(currentName);
        }
    }
    return results;
}

function makeLabel(customerDataObj){
    // given an object with data for a person in it, generate a shipping label in the following form: 
    // Miss Jane Doe
    // 123 Any St
    // Springfield, Ma 12345 
    // Please note that the next lines are generated via newlines

    // create a result string;
    // create variables the save the following info:
    // greeting, givenName, familyName
    // \n new line
    // streetNumber, streetName
    // \n new line
    // city, state, zip
    //concat everything together;

    let result = "";

    let salutations = customerDataObj.greeting;
    let firstName = customerDataObj.givenName;
    let familyName = customerDataObj.familyName;
    let streetNum = customerDataObj["home address"].streetNumber;
    let streetName = customerDataObj["home address"].streetName;
    let custCity = customerDataObj["home address"].city;
    let custState = customerDataObj["home address"].state;
    let custZip = customerDataObj["home address"].zip;

    return result += salutations + " " + firstName +" "+ familyName + "\n" +streetNum +" "+ streetName + "\n" + custCity +", "+ custState + " " + custZip;
}


// Test call: makeLabel({
//     "familyName": "McGee",
//     "givenName": "Chuckles",
//     "greeting": "Miss.",
//     "age": 28,
//     "height": 165,
//     "colors": {
//       "eye": "green",
//       "hair": "green"
//     },
//     "home address": {
//       "streetNumber": "12345",
//       "streetName": "Any St",
//       "state": "Mo",
//       "zip": 63102,
//       "city": "Kansas City"
//     }
//   })
