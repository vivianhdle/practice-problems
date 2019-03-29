// Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

// Input:
// input_array: an array of anything
// Output:
// output_array, the original array, randomly arranged
// Example:
var input_array = [5,3,2,5,1];
// output = randomize_list(input_array); console.log(output); //outputs


// [1,3,5,1,2,5]
// Put your solution in answer.js
// hint: Math.random() will give you a random fractional number between 0 and 1
// hint: .pop() will allow you to take numbers off your source array as you pick them randomly
// hint: Using pop will directly affect the length of the array

//grabbing a name out of a hat
function randomize_list(someArray){
    var newArray = [];
    while(someArray.length>0){
        var randomIndex = Math.floor(Math.random()*someArray.length)
        var pickedItem = someArray[randomIndex];
        newArray.push(pickedItem);
        someArray.splice(randomIndex,1);
    }
    return newArray;
}

console.log(randomize_list(input_array),input_array);