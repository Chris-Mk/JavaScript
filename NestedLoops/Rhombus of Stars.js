function rhombusOfStars(n) {
    //prints the top row;
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        line += "*";
        for (let j = 1; j < i; j++) {
            line += " *";
        }
        console.log(line);
    }

    //prints the bottom part
    for (let i = 1; i < n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += " "
        }

        line += "*";
        for (let j = i; j < n - 1; j++) {
            line += " *";
        }
        console.log(line);
    }
}

rhombusOfStars([4]);