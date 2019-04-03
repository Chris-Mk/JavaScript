function scholarship(input) {
    let income = Number(input.shift());
    let success = Number(input.shift());
    let minWage = Number(input.shift());

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (income < minWage && success > 4.5) {
        socialScholarship = Math.floor(minWage * .35);
    }

    if (success >= 5.5) {
        excellentScholarship = Math.floor(success * 25);
    }

    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (socialScholarship < excellentScholarship) {
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }
}

scholarship([300.00, 5.65, 420.00]);