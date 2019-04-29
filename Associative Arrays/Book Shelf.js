function bookShelf(input) {
    const shelves = new Map();

    for (const line of input) {
        if (line.includes('->')) {
            const [id, genre] = line.split(' -> ');

            if (!shelves.has(id)) {
                shelves.set(id, new Map());
                shelves.get(id).set(genre, []);
            }
        } else {
            const [bookInfo, genre] = line.split(', ');

            for (const [id, shelf] of shelves) {
                if (shelf.has(genre)) {
                    shelves.get(id).get(genre).push(bookInfo);
                }
            }
        }
    }
    const sortedShelves = [...shelves.values()];

    console.log(sortedShelves.sort((a, b) => a[1] - b[1]));

    /*for (const [id, info] of shelves) {
        console.log(`${id} ${info[0]}: ${info[1]}`);
        [...info]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(e => console.log(`---> ${e[1]}`));
    }*/
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);