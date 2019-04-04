function InvalidNumber(input){
    let num = Number(input.shift());

    if (!((num >= 100 && num <= 200) || num === 0)){
        console.log('invalid');
    } 
}

InvalidNumber([75]);