

function populateRecords(record){
    var charge = 0;
    var advance = 0;
    for (var item in record){
        var currentObj = record[item]
        if (currentObj.type==='charge'){
            charge+=parseFloat(currentObj.amount)
        } else {
            advance+=parseFloat(currentObj.amount)
        }
    }
    return {'charge':charge,'cash advance':advance}
}

function render(){
    
}


