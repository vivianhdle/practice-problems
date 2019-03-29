function invert_negatives(num1){
    if (num1>0){
        return -num1;
    } else if(num1<0){
        return num1
    } else {
        return false;
    }
}

console.log(invert_negatives(-5));
console.log(invert_negatives(4000));
console.log(invert_negatives('puppies'));

