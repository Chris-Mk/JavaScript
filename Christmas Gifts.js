function christmasGifts(input) {
    let age = input.shift();
    let children = 0, adults = 0;

    while (age !== "Christmas") {
        if (age <= 16) {
            children++;
        } else {
            adults++;
        }

        age = input.shift();
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${children}`);
    console.log(`Money for toys: ${children * 5}`);
    console.log(`Money for sweaters: ${adults * 15}`);
}

christmasGifts([16, 20, 46, 12, 8, 20, 49, "Christmas"]);