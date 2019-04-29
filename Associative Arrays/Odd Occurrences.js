function oddOccurrences(input) {
    const array = input.toLowerCase().split(' ');
    const oddWords = [];

    for (const string of array) {
        let temp = array.filter(e => e === string);

        if (temp.length % 2 !== 0) {
            if (!oddWords.includes(string)) {
                oddWords.push(string);
            }
        }
    }
    console.log(oddWords.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');