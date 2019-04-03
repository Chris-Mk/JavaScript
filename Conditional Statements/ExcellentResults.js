function excellentResults(input) {
    let number = Number(input.shift());

    if (number >= 5.50) {
        console.log('Excellent!');
    } else {
        console.log('Not excellent.');
    }
}

excellentResults([5.50]);