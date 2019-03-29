// Build a function that takes in a string and an array of strings. The function should output an array of strings that contain the same letters as the single input string.

// Write a function that takes two parameters
// Parameter 1 - A string
// Parameter 2 - An array of strings
// The function should output all the words from the input array (parameter 2) that have the same letters as the first parameter. IE 'cat' has 'c','a', and 't', and all words that have 'c','a', and 't' will be included.
// Example:
var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
// fittingWords('cat', myArray);
// Output - ['cat','caterpillar','accurate','cactus']

function fittingWords(someStr,someArray){
    var newArray = []
    for (var wordIndex=0;wordIndex<someArray.length;wordIndex++){
        var currentWord = someArray[wordIndex];
        var tracker=0;
        for (var letterIndex=0;letterIndex<someStr.length;letterIndex++){
            var currentLetter= currentWord[letterIndex];
            for (var targetLetterIndex=0;targetLetterIndex<someStr.length;targetLetterIndex++){
                var currentTargetLetter = someStr[targetLetterIndex];
                if (currentTargetLetter===currentLetter){
                    tracker++
                    break;
                }
            }
        }
        if (tracker===someStr.length){
            newArray.push(currentWord);
        }
    }
    return newArray;
    //first access each letter
    //then see if the letter is in the word
    //if all letters are in the word, push to new array(make var new array)
}

console.log(fittingWords('cat', myArray));

//Next time try with an object map.