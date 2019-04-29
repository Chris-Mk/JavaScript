function companyUsers(input) {
    const list = new Map();

    for (const line of input) {
        const [name, id] = line.split(' -> ');

        if (!list.has(name)) {
            list.set(name, []);
            list.get(name).push(id);
        } else {
            if (!list.get(name).includes(id)) {
                list.get(name).push(id);
            }
        }
    }

    const sortedList = [...list]
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, employees] of sortedList) {
        console.log(company);
        employees.forEach(e => console.log(`-- ${e}`));
    }
}

companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);