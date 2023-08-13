// // 1-7 sum

// function sumOfNum(numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers; i++) {
//         const element = i;
//         result = result + element;
//         // console.log(element, result);
        
//     }
//     return result;
// }
// const sumResult = sumOfNum(6);
// console.log('1-7 er addition',sumResult);


// 1-7 sum

// function sumOfNumbers(numbers) {
//     let result = 1;
//     for (let i = 1; i < numbers; i++) {
//         // const element = i;
//         result = result * i;
//         // console.log(i, result);
        
//     }
//     return result;
// }
// var result = sumOfNumbers(6);
// console.log('6 er factorial',result);

// 3!

// function factorial(number){
//     let result =1;
//     for(let i =1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const result3 = factorial(3);
// console.log('3 factorial',result3);


// reverse

function factorial2(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i, result); 
    }
    return result;
}
const multiplication = factorial2(6);
console.log('6! ER REVERSE', multiplication)
