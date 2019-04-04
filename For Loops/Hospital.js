function hospital(input) {
    let period = Number(input.shift());
    let doctors = 7;
    let examinedPatients = 0;
    let unexaminedPatients = 0;

    for (let i = 1; i <= period; i++) {
        let dailyPatients = Number(input.shift());

        if (i % 3 == 0) {
            if (examinedPatients < unexaminedPatients) {
                doctors++;
            }
        }

        
        if (dailyPatients > doctors) {
            unexaminedPatients += dailyPatients - doctors;
            examinedPatients += doctors;
        } else {
            examinedPatients += dailyPatients;
        }
    }

    console.log(`Treated patients: ${examinedPatients}.`);
    console.log(`Untreated patients: ${unexaminedPatients}.`);
}

hospital([4, 7, 27, 9, 1]);
hospital([6, 25, 25, 25, 25, 25, 2]);
hospital([3, 7, 7, 7]);