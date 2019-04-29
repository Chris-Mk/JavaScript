function phoneBook(input) {
    let phoneBook = {};

    for (const element of input) {
        let [name, number] = element.split(' ');
        phoneBook[name] = number;
    }

    Object.keys(phoneBook)
        .forEach(key => console.log(`${key} -> ${phoneBook[key]}`));
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);