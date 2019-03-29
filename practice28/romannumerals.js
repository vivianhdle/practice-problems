function romanNumerals(number){
    const conversion = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
}
    const allKeys = Object.keys(conversion);
    let lastKey= null;
    let num = number;
    let romanNumeral = '';
    for (let keyIndex = allKeys.length-1;keyIndex>=0;keyIndex--){
        let currentKey = allKeys[keyIndex];
        while(num-currentKey>=0){
            if(lastKey[0]==='5' && num >= lastKey-currentKey){
                romanNumeral+=conversion[currentKey]+conversion[lastKey];
                num-=lastKey-currentKey;
            } else if(lastKey[0]==='1' && num>=lastKey - allKeys[keyIndex-1]){
                romanNumeral+=conversion[allKeys[keyIndex-1]]+conversion[lastKey];
                num-=allKeys[keyIndex-1]-allKeys[lastKey];
            } else {
                romanNumeral+=conversion[currentKey];
                num-=currentKey;
            }
        }
        lastKey = currentKey;
    }
    return romanNumeral;
}

console.log(romanNumerals(140));