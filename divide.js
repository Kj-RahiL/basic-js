for (let i = 0; i <=50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar')        
    }
    else if (i % 3 === 0) {
        console.log('3-foo')        
    }
    else if (i % 5 === 0 ) {
        console.log('5-bar')        
    }
    else {  
        console.log(i)
    }
}