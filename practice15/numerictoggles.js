//2*2,2*3,3*4,4*4

//take the number given, multiply it by itself,
//then multiply it by itself+1
//start the process over for itself+1
//every odd one is itself+1

function numeric_toggle(num){
    const numberList = [];
    let currentNumber = num
    let nextNumber = currentNumber+1
    while(numberList.length<8){
        if (numberList.length===2||
            numberList.length===3||
            numberList.length===6||
            numberList.length===7)
            {
            numberList.push(-currentNumber*currentNumber);
            numberList.push(-currentNumber*nextNumber);
            currentNumber = nextNumber
            nextNumber = currentNumber+1
        } else {
            numberList.push(currentNumber*currentNumber);
            numberList.push(currentNumber*nextNumber);
            currentNumber = nextNumber
            nextNumber = currentNumber+1
        }
        
    }
    return numberList
}
console.log(numeric_toggle(2))