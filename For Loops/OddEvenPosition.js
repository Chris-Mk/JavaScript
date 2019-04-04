function oddEvenPosition(input) {
    let n = Number(input.shift());

    let evenMin = 2000000000;
    let evenMax = -2000000000;
    let evenSum = 0;

    let oddMin = 2000000000;
    let oddMax = -2000000000;
    let oddSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());

        if (i % 2 == 0) {
            evenSum += num;

            if (num < evenMin) {
                evenMin = num;
            }
            
            if (num > evenMax) {
                evenMax = num;
            }
        } else {
            oddSum += num;

            if (num < oddMin) {
                oddMin = num;
            }
            
            if (num > oddMax) {
                oddMax = num;
            }
        }
    }

    let odd1 = `OddSum=${oddSum},`;
    let odd2 = "";
    if (oddMin == 2000000000) {
        odd2 = "OddMin=No,";
    } else {
        odd2 = `OddMin=${oddMin},`;
    }

    let odd3 = "";
    if (oddMax == -2000000000) {
        odd3 = "OddMax=No,";
    } else {
        odd3 = `OddMax=${oddMax},`;
    }

    let even1 = `EvenSum=${evenSum},`;
    let even2 = "";
    if (evenMin == 2000000000) {
        even2 = "EvenMin=No,";
    } else {
        even2 = `EvenMin=${evenMin},`;
    }

    let even3 = "";
    if (evenMax == -2000000000) {
        even3 = "EvenMax=No";
    } else {
        even3 = `EvenMax=${evenMax}`;
    }

    console.log(`${odd1} ${odd2} ${odd3} ${even1} ${even2} ${even3}`);
}

//oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);
//oddEvenPosition([1, 1]);
//oddEvenPosition([5 , 3, -2, 8, 11, -3]);
//oddEvenPosition([1, -5]);
//oddEvenPosition([2, 1.5, -2.5]);
//oddEvenPosition([0]);
//oddEvenPosition([4, 1.5, 1.75, 1.5, 1.75]);
oddEvenPosition([3, -1, -2, -3]);