function random_range(start_num,end_num){
    var results = Math.floor((Math.random()*end_num)+start_num);
    var arrayLength = start_num.length;
    var randomIndex = Math.floor(Math.random()*arrayLength);
    if (arrayLength>1) {
        return start_num[randomIndex];
    } else {
        return results;
    }
}