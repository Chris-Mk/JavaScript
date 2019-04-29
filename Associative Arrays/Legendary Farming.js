function legendaryFarming(input) {
    const items = new Map();
    items.set('shards', 0);
    items.set('fragments', 0);
    items.set('motes', 0);

    const junks = new Map();
    const array = input.split(' ');

    for (let i = 0; i < array.length - 1; i += 2) {
         const amount = Number(array[i]);
         const item = array[i + 1].toLowerCase();

        if (items.has(item)) {
            items.set(item, items.get(item) + amount);

            if (items.get(item) >= 250) {
                items.set(item, items.get(item) - 250);

                if (item === 'shards') {
                    console.log('Shadowmourne obtained!');
                    break;
                } else if (item === 'fragments') {
                    console.log('Valanyr obtained!');
                    break;
                } else if (item === 'motes') {
                    console.log('Dragonwrath obtained!');
                    break;
                }
            }
        } else {
            if (!junks.has(item)) {
                junks.set(item, amount);
            } else {
                junks.set(item, junks.get(item) + amount);
            }
        }
    }
    [...items]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(e => console.log(`${e[0]}: ${e[1]}`));

    [...junks]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(e => console.log(`${e[0]}: ${e[1]}`));
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');