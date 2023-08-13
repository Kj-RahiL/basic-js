/* number 1 case
var string = 'my name is rahil';
var bulien = true;
var number = 789;

*/

// number 3 case

// const and let modde pathtoko hocce, const man change kora jay nah kintu let man change kora jay.

// const num2 = 34;
// let num3 = 34;
// let num4 =35;

// console.log(num2)
// console.log(num3)
// console.log(num4)

// solving module 21 er 3rd number

// let num3 = 34;
// let num2 =35;

// const add = num3 + num2;
// const sub = num3 - num2;
// const multi = num3 * num2;
// const divide = num2 / num3;
// const modules = num2 % num3;

// console.log(add,sub, multi,divide,modules);

// problem solving 4

// let num1 = 30;
// let num2 = 30;

// // >,<
// if(num1> num2){
//     console.log('number 1 boddah')
// }
// else if(num1< num2){
//     console.log('number 2 boddah')
// }
// else{
//     console.log('muri khaa')
// }

// // ==, !=

// if(num1 == num2){
//     console.log('number soman')
// }
// else if(num1 != num2){
//     console.log('number soman noii')
// }
// else{
//     console.log('muri khaa')
// }

// // <= ,>=

// if(num1>= num2){
//     console.log('number 1 soman boddah')
// }
// else if(num1<= num2){
//     console.log('number 2 sooman boddah')
// }
// else{
//     console.log('muri khaa')
// }


// problem number 5

// const beton = 30000;
// const bike = 2;

// if (beton > 25000 && bike >= 2 ) {
//     console.log("cholo biye kori")
// }
// else{
//     console.log('tui tor poth dekh')
// }

// if (beton > 40000 || bike >= 3) {
//     console.log("cholo biye kori")
// }
// else{
//     console.log('tui tor poth dekh')
// }

// solving 8

// 


// problem solving triky 3rd

function paperReuirments(x, y, z) {
    console.log(x,y,z)
  const totalPaper = x + y + z;
  return totalPaper;
}

let first = 100;
let second = 200;
let third = 300;
const paper = paperReuirments(first,second, third);
console.log(paper)


function paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies) {
    const pagesPerFirstBook = 100;  // প্রতি পৃষ্ঠা লাগবে
    const pagesPerSecondBook = 200; // প্রতি পৃষ্ঠা লাগবে
    const pagesPerThirdBook = 300;  // প্রতি পৃষ্ঠা লাগবে
  
    const totalPages =
      (firstBookCopies * pagesPerFirstBook) +
      (secondBookCopies * pagesPerSecondBook) +
      (thirdBookCopies * pagesPerThirdBook);
  
    return totalPages;
  }
  
  // ফাংশন টেস্ট করা
  const firstBook = 5;
  const secondBook = 3;
  const thirdBook = 7;
  
  const totalPaper = paperRequirements(firstBook, secondBook, thirdBook);
  console.log(`মোট পেপার সংখ্যা: ${totalPaper}`);