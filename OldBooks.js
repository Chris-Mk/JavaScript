function oldBooks(input) {
    let bookName = input.shift();
    let libraryCapacity = Number(input.shift());

    let counter = 0;
    while (libraryCapacity > 0) {
        let books = input.shift();
        
        if (books === bookName) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        
        counter++;
        libraryCapacity--;
    }

    if (libraryCapacity <= 0) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["The Spot",
4,
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify"])