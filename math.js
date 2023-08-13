// even numbers the qus is- ei 2ta function ki eksthae kora jabe

function getSomeOfArray(numbers) {
    let sum =0;
    for(let i = 0; i <numbers.length; i++){
        const index =i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element,sum)
    }
    return sum;
}
// const myNumbers = [12, 65, 78, 32, 45,91]
// getSomeOfArray(myNumbers)


// odd numberw

function getOddNumbers(numbers){
    const oddNumbers = [];
    for(let i =0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) { 
        console.log(index, element);
        oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 65, 78, 32, 45,91];
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSomeOfArray(oddNumbers);
console.log('odd numbers', oddNumberSum)    