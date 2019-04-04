function christmasTree(n) {
    for (let i = 0; i <= n; i++) {
        let stars = "*".repeat(i);
        let space = " ".repeat(n - i);
        let body = " | ";
        let row = space + stars + body + stars + space;

        console.log(row);
    }
}

christmasTree([4]);