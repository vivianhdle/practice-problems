// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.


function fizzbuzz(){
    for(i=1;i<=100;i++){
        if (i%3===0){
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();