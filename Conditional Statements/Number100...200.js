function num100to200(input) {
    let number = Number(input.shift());

    if (number < 100) {
        console.log('Less than 100');
    } else if (number <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

num100to200([210]);