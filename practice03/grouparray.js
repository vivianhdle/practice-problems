var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(someArray){
    var results = [];
    var strings = [];
    var bools = [];
    var nums = [];
    for (arrayIndex=0;arrayIndex<someArray.length;arrayIndex++){
        var currentItem = someArray[arrayIndex];
        if (typeof currentItem === 'string'){
            strings.push(currentItem);
        } if (typeof currentItem === 'number'){
            nums.push(currentItem);
        } else {
            bools.push(currentItem);
        }
    }
    results.push(strings,bools,nums)
    return results;
}



console.log(groupArray(myArray));
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]