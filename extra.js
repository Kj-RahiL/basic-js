// function matchFinder(string1, string2) {

//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'please enter a text';
//     }
//     else if (string1.includes(string2)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(matchFinder('javascipt', 'f'))


// problem 4


// function findAddress(address) {

//     const keysArray = Object.keys(address);
//     const valuesArray = Object.values(address);


//     for (i = 0; i < keysArray.length; i++) {
//         console.log(valuesArray[i])

//     }

// }
// const inputObj = {
//     street: 10,
//     house: '15A',
//     society: 'Earth Perfect'
// }
// findAddress(inputObj);

// ////////////
function findAddress(obj) {

    if (typeof obj !== "object") {
        return "please provide me a valid object"
    } else {
        const name = obj.name || "_";
        const age = obj.age || "__";
        const email = obj.email || "___";
        const bou = obj.bou || "nai";
        return "amar nam " + name + ". amar boyos " + age + ". amar email " + email;
    }

}

const obj = {
    name: "mehedy",
    
    email: "abc@gmail.com"
}

console.log(findAddress(obj))

function customSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // উপাদান স্থান পরিবর্তন করবেন
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// স্যাম্পল অ্যারে
const myArray = [5, 2, 8, 1, 3];

const sortedResult = customSort(myArray);
console.log(sortedResult);
