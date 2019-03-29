// Numeric Spirals
// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

// Write a function that takes one parameter
// Parameter 1 - A number
// The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
// Example:
// fibSequence(12);
// Output - 0 1 1 2 3 5 8 13 21 34 55 89

function fibSequence(num){
    var fibArray = [];
    for (fibIndex = 0; fibIndex<num; fibIndex++){
        if (fibIndex === 0 || fibIndex === 1){
            fibArray.push(fibIndex);
        } else {
            fibArray.push(fibArray[fibIndex-1]+fibArray[fibIndex-2]);
        }
    }
    return fibArray
}
console.log(fibSequence(12));