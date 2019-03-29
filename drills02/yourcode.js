

function countOccurences(someArray,targetWord){
    var count = 0;
    for (i=0;i<someArray.length;i++){
        if (someArray[i] === targetWord){
            count++;
        }
    }
    return count;
}

function wordLengths(someArray){
    results = [];
    for (i=0;i<someArray.length;i++){
        length = someArray[i].length;
        results.push(length);
    }
    return results;
}

function getMinMaxMean(someArray){
    var total = 0;
    var arrayLength = someArray.length;
    for (i=0;i<someArray.length;i++){
        total += someArray[i];
    }
    var output = {min: Math.min(...someArray), max: Math.max(...someArray), mean: total/arrayLength};
    return output; 
}

function findMode(someArray){
    var counter = 0;
    var mode = null;
    for(numIndex=0;numIndex<someArray.length;numIndex++){
        var currentNum = someArray[numIndex];
        if (tempCount >= counter) {
            counter = tempCount;
            mode = tempMode;
        }
        var tempCount = 0;
        var tempMode = 0;
        for(otherNum=0;otherNum<someArray.length;otherNum++){
            if (currentNum === someArray[otherNum]) {
                tempCount++
                tempMode = currentNum
            }
        }
    }
    return mode;
}


// var total = 0;
// var minNumber = someArray[0];
// var maxNumber = someArray[0];
// var length = someArray.length;
// for (i=0;i<someArray.length;i++) {
//     total += someArray[i];
//     if (someArray[i]>=maxNumber){
//         maxNumber = someArray[i];
//     }
//     if (someArray[i]<= minNumber) {
//         minNumber = someArray[i];
//     }
//
//     return {min: minNumber, max: maxNumber, mean: total/length}
//}
