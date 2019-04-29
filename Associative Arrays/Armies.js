function armies(input) {
    const armyMap = new Map();

    for (const element of input) {
        if (element.includes('arrives')) {
            const data = element.split(' arrives');
            armyMap.set(data[0], new Map());
        } else if (element.includes(':')) {
            const [leader, armyInfo] = element.split(': ');
            let [name, count] = armyInfo.split(', ');
            count = +count;

            if (armyMap.has(leader)) {
                armyMap.get(leader).set(name, count);
            }
        } else if (element.includes('+')) {
            let [name, count] = element.split(' + ');
            count = +count;

            for (const [leader, armyInfo] of armyMap) {
                if (armyInfo.has(name)) {
                    armyMap.get(leader).set(name, armyMap.get(leader).get(name) + count);
                }
            }
        } else if (element.includes('defeated')) {
            const data = element.split(' defeated');
            armyMap.delete(data[0]);
        }
    }

    const sortedMap = new Map();
    for (const [leader, armyInfo] of armyMap) {
        let sum = 0;
        [...armyInfo]
            .map(e => sum += e[1]);
        sortedMap.set(leader, sum);
    }

    [...sortedMap]
        .sort((a, b) => b[1] - a[1])
        .forEach(e => {
            console.log(`${e[0]}: ${e[1]}`);
            [...armyMap.get(e[0])]
                .sort((x, z) => z[1] - x[1])
                .forEach(a => console.log(`>>> ${a[0]} - ${a[1]}`));
        })
}

armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);