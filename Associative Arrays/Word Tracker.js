function wordTracker(input) {
    const wordsCount = new Map();
    input.shift()
        .split(' ')
        .forEach(e => wordsCount.set(e, 0));

    for (const string of input) {
        if (wordsCount.has(string)) {
            wordsCount.set(string, wordsCount.get(string) + 1);
        }
    }

    [...wordsCount]
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} - ${e[1]}`));
}

wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to'
    , 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because',
    'this','is','your','task']);