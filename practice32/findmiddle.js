function find_middle_letters(someStr){
    var indexNumber = Math.floor(someStr.length/2);
    if (someStr.length%2===0) {
        return someStr.slice(indexNumber-1,indexNumber+1);
    } else {
        return someStr[indexNumber];
    }
}