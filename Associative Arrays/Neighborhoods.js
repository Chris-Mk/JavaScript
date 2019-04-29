function neighborhoods(input) {
    const list = new Map();
    input.shift()
        .split(', ')
        .forEach(e => list.set(e, []));

    for (const people of input) {
        const [hood, name] = people.split(' - ');

        if (list.has(hood)) {
            list.set(hood, list.get(hood).concat(name));
        }
    }

    [...list]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(e => {
            console.log(`${e[0]}: ${e[1].length}`);
            e[1].forEach(p => console.log(`--${p}`));
        })
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);