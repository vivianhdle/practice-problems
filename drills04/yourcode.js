

function changeElements(targetClass){
    var targetWords = {
    'one':1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9,
    'ten':10
}
    for (var key in targetWords){
        var text = $(`${targetClass}:contains(${key})`).text()
        if (text){
            $(`${targetClass}:contains(${key})`).text(`${targetWords[key]}`)
        }
    }
}

function appendTextToElement(targetClass,changedValue){
    $(targetClass).each(function(){
        let newText = $(this).text() + changedValue;
        $(this).text(newText);
    })
}

function addClass(selector1,targetClass){
    $(selector1).addClass(targetClass);
    return $(selector1).length;
}

function removeElements(targetClass){
    $(targetClass).remove();
}

