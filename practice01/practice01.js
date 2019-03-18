// function will be called 'biggerWords'
// function will take in two params called 'string' and array of strings
// create an output storage list called outputArr
// save the length of the first param 'string' into storage unit called currStrLen
// step through each item in the 'array of strings' and each those into storage unit called eachItem
// compare the length of currStrLen and eachItemLen
// if eachItemLen is longer than currStrLen, then throw them into an output list called outputArr
// then return the outputArr
// if nothing is in outputArr then just say "there are not any bigger words"

function biggerWords(str, strArr) {
    let outputArr = [];
    let currStrLen = str.length;

    for (let i = 0; i < strArr.length; i++) {
        let eachItem = strArr[i];

        if (eachItem.length > currStrLen) {
            outputArr.push(eachItem);
        }
    }
    
    if (!outputArr) {
        return "No bigger words";
    }
    return outputArr;
}

biggerWords('whales', myArray); // ['reptile', 'mammoth', 'turtles'];