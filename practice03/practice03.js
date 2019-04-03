// ## One to Multi

// Build a function that sorts an array into a multidimensional array grouped by data type

// - Write a function that takes one parameter 
// 	- Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example: 
// 	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// 	- `groupArray(myArray);`
// 	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

let myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function oneToMulti(arr) {
    const output = [];
    const strOutput = [];
    const boolOutput = [];
    const numOutput = [];

    for (let i = 0; i < myArray.length; i++) {
        let eachItem = myArray[i];
        if(eachItem === true || eachItem === false) {
            boolOutput.push(eachItem);
        } else if(typeof(eachItem) === "string") {
            strOutput.push(eachItem);
        } else if(typeof(eachItem) === "number") {
            numOutput.push(eachItem);
        } else {
            return "whoops! It missed! eachItem is: " + eachItem;
        }
    }
    output.push(strOutput);
    output.push(numOutput);
    output.push(boolOutput);

    return output;
}

oneToMulti(myArray);
