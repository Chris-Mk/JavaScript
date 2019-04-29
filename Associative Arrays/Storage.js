function storage(input) {
    let store = new Map();

    for (const element of input) {
        let [product, amount] = element.split(' ');
        amount = +amount;

        if (!store.has(product)) {
            store.set(product, amount);
        } else {
            store.set(product, store.get(product) + amount);
        }
    }
    store.forEach((v, k) => console.log(`${k} -> ${v}`));
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);