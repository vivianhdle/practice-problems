// Bigger words
// Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

// Write a function that takes two parameters
// Parameter 1 - A string
// Parameter 2 - An array of strings
// The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
// Example:
// Output - ['reptile', 'mammoth', 'turtles']

function biggerWords(targetString,stringArray){
    var targetLength = targetString.length;
    var newArray = [];
    for (arrayIndex=0;arrayIndex<stringArray.length;arrayIndex++){
        var currentWord = stringArray[arrayIndex];
        if (currentWord.length>targetLength){
            newArray.push(currentWord);
        }
    }
    return newArray;
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
console.log(biggerWords('whales', myArray));