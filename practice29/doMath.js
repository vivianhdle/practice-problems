// Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

// it uses the operator to determine what math to do to the numbers
// if '+', it adds them
// if '-', it subtracts them
// if '*' or 'x' or 'X', it multiplies them
// if '/', it divides them
// if then returns the result
// Example:
// do_math(5,2,'*')
// Return: 10

function do_math(num1,num2,op){
    switch(op) {
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*':
        case 'x':
        case 'X':
            return num1*num2
            break;
        case '/':
            return num1/num2;
            break;
        default:
            return 'Try again'
    }
}

console.log(do_math(5,7,'/'));