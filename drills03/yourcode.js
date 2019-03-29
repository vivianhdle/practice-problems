
function getPath(someString){
    var newString = someString.split('/');
    return newString;
}

function getPathParts(url){
    // var object = {
    //     "protocol": "",
    //     "host": "",
    //     "port": null;
    //     "path": "",
    //     "file": ""
    // }
    // if (url[4]=== 's'){
    //     object.protocol = 'https'
    // } else {
    //     object.protocol = 'http'
    // }
    // for (character=0;character<url.length;character++){
    //     if (url[character] === '/' && url[character+1] === '/'){
            
    //     }
    // }
}

function getCapitalCount(someArray){
    var count = 0;
    for (arrayIndex=0;arrayIndex<someArray.length;arrayIndex++){
        var currentWord = someArray[arrayIndex];
        if (65<=currentWord.charCodeAt(0) && currentWord.charCodeAt(0)<=90) {
            count++;
        }
    }
    return count;
}

function correctCalcChecker(someArray){
    result = [];
    for (var eachIndex in someArray) {
        var eachObject = someArray[eachIndex]
        if (doMath(eachObject)){
            result.push(eachObject);
        }
    }return result;
}

function doMath(obj){
    switch(obj.op){
        case "+":
            if ((obj.num1 + obj.num2) === obj.result){
                return true;
            } else {
                return false;
            }
            break;
        case "-":
            if ((obj.num1 - obj.num2) === obj.result){
                return true;
            } else {
                return false;
            }
            break;
        case "*":
            if ((obj.num1 * obj.num2) === obj.result){
                return true;
            } else {
                return false;
            }
            break;
        case "/":
            if ((obj.num1 / obj.num2) === obj.result){
                return true;
            } else {
                return false;
            }
            break;
        }
}
