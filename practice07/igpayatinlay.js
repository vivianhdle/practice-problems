// Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

// Write a function that takes one parameter
// Parameter 1 - A string
// The function should output your input string translated into Pig Latin
// Example:
// var myString = "Hello my name is Stu"
// `translate(myString);
// Output - "ellohay ymay ameya siay tusay"
// Making it better!
// There are several more rules to Pig Latin, try incorporating as many as you can into your function.
// There are different rules for words that start with vowel sounds or silent letters for example.
// Here is a link to an explanation of all the rules.
// Also try maintaining capitalization of words that are capitalized in your input string.
// Example:
// "Hello there" would be "Ellohay heretay"


//go through each word in splitString
//find the first vowel (don't know how many times we're looping... so a while loop?)
//take the first letters before the vowel and add ay to it and put it in the
function translatePigLatin(someString){
    vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var stringSplit = someString.split(' ');
    var position=0;
    while(position<stringSplit.length){
        for (wordIndex=0;wordIndex<stringSplit.length;wordIndex++){
            var currentWord = stringSplit[wordIndex];
            for (letterIndex=0;letterIndex<currentWord.length;letterIndex++){
                var currentLetter = currentWord[letterIndex];
                if (vowels.includes(currentLetter) && letterIndex==0){
                    stringSplit[wordIndex] = currentWord+'ay'
                    break;
                } else if (vowels.includes(currentLetter)){
                    var endString = currentWord.slice(0,letterIndex) + 'ay'
                    stringSplit[wordIndex] = currentWord.substr(letterIndex)+endString
                    break;
                }
            }
            position++
        }
    }
    return stringSplit.join(' ');
}

console.log(translatePigLatin('Hello there'));