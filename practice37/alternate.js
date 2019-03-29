function alternateCaps(someStr){
    var newStr = '';
    for (letterIndex=0;letterIndex<someStr.length;letterIndex++){
        var currentLetter = someStr[letterIndex];
        if (letterIndex%2===0){
            newStr += currentLetter.toLowerCase();
        } else {
            newStr += currentLetter.toUpperCase();
        }
    }
    return newStr;
}

console.log(alternateCaps('asdqweqwrewtwer'))