

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
        let text = $(`${targetClass}:contains(${key})`).text();
        if (text){
            $(`${targetClass}:contains(${key})`).text(map[key]);
        }
    }
}

function appendTextToElement(targetClass,targetText){
    $(targetClass).each(function(){
        const newText = $(this).text() + targetText;
        console.log(newText);
        $(this).text(newText);
    })
}

function addClass(targetClass,addClass){
    $(targetClass).each(function(){
        $(this).addClass(addClass);
    })
}

function removeElements(selector){
    $(selector).remove();
}

