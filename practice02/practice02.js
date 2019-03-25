// ## Total Reverse 

// Build a function that takes in an array and reverses it

// - Write a function that takes one parameter
// 	- Parameter 1 - An array of anything
// - The function should output an array that is in reverse order from the input array
// - Example: 
// 	- `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
// 	- `arrayReverse(myArray);`
// 	- Output - `['23', 'what', 'Bob', 45, 'hello']`
// - Avoid using pre-built functions that do something similar

// create an empty storage unit to add stuff to later
// create a storage unit to save the last item in the array.
// add in the last item of the array and count down the array carrying each item assigned to storage unit
// print out the storage unit that was empty earlier. It should now be reversed compared to the input

const sampleArr = ['hello', 45, 'Bob', 'what', '23'];

function totalReverse(arrStuff) {
    const outputArr = [];
    let eachItem = null;
    for(let i = arrStuff.length-1; i >= 0; i--) {
        eachItem = arrStuff[i];
        outputArr.push(eachItem);
    }
    return outputArr;
}

totalReverse(sampleArr);
