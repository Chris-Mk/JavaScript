function graduation2(input) {
    let name = input.shift();
    let gradeSum = 0;
    let months = 1;
    let torn = 0;
    let isTorn = false;

    while (months <= 12) {
        let grade = Number(input.shift());

        if (grade < 4.00) {
            torn++;
        } else {
            gradeSum += grade;
            months++;
        }

        if (torn >= 2) {
            isTorn = true;
            break;    
        }
        
    }
    
    if (isTorn) {
        console.log(`${name} has been excluded at ${months} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(gradeSum / 12).toFixed(2)}`);
    }
}

graduation2(["Mimi",
5,
6,
5,
6,
5,
6,
6,
2,
3])