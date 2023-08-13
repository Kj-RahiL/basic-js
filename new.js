function canPay(changeArray, totalDue) {

    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "please enter valid array"
        
    }
    else{
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i]
        }
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}


// let num1 = [1, 1, 8]
// num2 = 10;

const total = canPay([], 10)
console.log(total)