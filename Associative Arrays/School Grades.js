function schoolGrades(students) {
    const grades = new Map();

    for (const student of students) {
        const [name, ...scores] = student.split(' ');
        let nums = scores.map(Number);

        if (grades.has(name)) {
            grades.set(name, grades.get(name).concat(nums));
        } else {
            grades.set(name, nums);
        }
    }
    const avg = grades => grades.reduce((a, b) => a + b) / grades.length;

    [...grades.entries()]
        .sort((a, b) => avg(a[1]) - avg(b[1]))
        .forEach(s => console.log(`${s[0]}: ${s[1].join(', ')}`));
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);