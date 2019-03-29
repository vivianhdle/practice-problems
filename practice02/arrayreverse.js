function arrayReverse(someArray){
    var newArray = [];
    for(var arrayIndex=someArray.length-1;arrayIndex>=0;arrayIndex--){
        var currentItem = someArray[arrayIndex];
        newArray.push(currentItem);
    }
    return newArray;
}

console.log(arrayReverse(['hello',45,'bob','what','23']));