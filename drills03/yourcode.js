

function getPath(strPath){
    let arrPath = strPath.split('');
    let i = 0;
    let output = [];
    let results = "";
    while(i <= arrPath.length){
        let eachChar = arrPath[i];
        if(eachChar !== "/") {
            if(eachChar === undefined) {
                output.push(results);
                break;
            }
            results += eachChar;
        }
        if(eachChar === "/") {
            output.push(results);
            results = "";
        }
        i++;
    }
    return output;
}

function getPathParts(pathStr){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
