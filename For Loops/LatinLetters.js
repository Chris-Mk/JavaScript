function latinLetters() {
    for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
        console.log(String.fromCodePoint(ch));
    }
}

latinLetters();