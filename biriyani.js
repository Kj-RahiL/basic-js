const number = ['abul', 'babul', 'cabul', 'tabul', 'babul', 'abul', 'kabul', 'habul', 'abul' ,'habul']


function removeDuplicats(number){
    const uniques =[];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (uniques.includes(element) === false) {
            uniques.push(element)
        }

    }
    return uniques;
}

const uniquesNames = removeDuplicats(number)
console.log(uniquesNames)

function biriyani(names){
    const nam = [];
    for(let i = 0; i <names.length; i++){
        const name = names[i];
        if(nam.includes(name) === false){
            nam.push(name)
        }
    }
    return nam;
}

const duName = biriyani(number);
console.log(duName)
