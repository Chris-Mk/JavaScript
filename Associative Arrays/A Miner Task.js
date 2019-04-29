function minerTask(input) {
    const resources = new Map();

    for (let i = 0; i < input.length - 1; i += 2) {
        const mineral = input[i];
        const quantity = Number(input[i + 1]);

        if (!resources.has(mineral)) {
            resources.set(mineral, quantity);
        } else {
            resources.set(mineral, resources.get(mineral) + quantity);
        }
    }

    [...resources].forEach(resource => console.log(`${resource[0]} -> ${resource[1]}`));
}

minerTask(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

minerTask(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);