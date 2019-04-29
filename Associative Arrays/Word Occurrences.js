function wordOccurrences(words) {
    const wordCount = new Map();

    for (const word of words) {
        if (!wordCount.has(word)) {
            wordCount.set(word, 1);
        } else {
            wordCount.set(word, wordCount.get(word) + 1);
        }
    }

    [...wordCount]
        .sort((a, b) => b[1] - a[1])
        .forEach(w => console.log(`${w[0]} -> ${w[1]} times`));
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);