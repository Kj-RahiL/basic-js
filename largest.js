// variable largest
let num1 = 69;
let num2 = 45;
let num3 = 69;

if (num1 > num2 && num1 > num3) {
    console.log('large number is num1: ', num1)    
}
 else if (num2 > num1 && num2 > num3) {
    console.log('large number is num2: ', num2)    
}
else{
    console.log('large number is num3: ', num3)    
}


// array largest

function largeNumber(number) {
    let largest = number[0];
    for (let i  = 0; i  < number.length; i ++) {
        const element = number[i];
        if (element > largest) {
             largest = element;
        }   
    }
    return largest;
}

const numberArray1 = [156, 167, 123, 234, 182, 134];
const largest = largeNumber(numberArray1);
console.log('large number is ', largest)

// lowest
function lowNumber(number) {
    let lowest = number[0];
    for (let i  = 0; i  < number.length; i ++) {
        const element = number[i];
        if (element < lowest) {
             lowest = element;
        }   
    }
    return lowest;
}

const numberArray = [156, 45, 167, 123, 234, 182, 134];
const lowest = lowNumber(numberArray);
console.log('lowest number is ', lowest)