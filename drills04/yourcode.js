

function changeElements(targetClass){
    const map  = {
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9
    }
    for (let key in map){
        let text = $(`${targetClass}:contains(${key})`);
        if (text){
            $(targetClass).text(key);
        }
    }
}

function appendTextToElement(){

}

function addClass(){
}

function removeElements(){

}

