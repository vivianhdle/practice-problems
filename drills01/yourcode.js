
function sumArray(someArray){
    var total = 0;
	for (numIndex=0;numIndex<someArray.length;numIndex++) {
	    total += someArray[numIndex];
    }
	return total;
}

function fitWithinVal(someArray,targetNumber){
    //numbers must be less than the targetNumber
    //find numbers that add up to the targetNumber
    var position = 0;
    var looping = true;
    var result = [];
    while (position<someArray.length && looping){
        if (sumArray(result)+someArray[position] <= targetNumber){
            result.push(someArray[position]);
        } else if (sumArray(result) === targetNumber) {
            looping = false;
        }position++;
    }
    return result;
}

function getAllNamesShorterThan(someArray,targetLength){
    var nameArray = [];
    for (numberIndex=0;numberIndex<someArray.length;numberIndex++){
        var name = someArray[numberIndex];
        if (name.length<targetLength) {
            nameArray.push(name);
        }
    }
    return nameArray;
}

function makeLabel(infoOne){
    var address = infoOne['home address'];
    return `${infoOne.greeting} ${infoOne.givenName} ${infoOne.familyName}\n${address.streetNumber} ${address.streetName}\n${address.city}, ${address.state} ${address.zip}`;
}