function findVowels(someStr){
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var newStr = ''
    for(var letterIndex=0;letterIndex<someStr.length;letterIndex++){
        var currentLetter=someStr[letterIndex];
        for(var vowelIndex=0;vowelIndex<vowels.length;vowelIndex++){
            var currentVowel=vowels[vowelIndex];
            if (currentLetter === currentVowel) {
                newStr += currentLetter;
            }
        }
    }
    return newStr;
}

console.log(findVowels('asjhdjkahskjqowieu  uwweuiiiowooooooo'))