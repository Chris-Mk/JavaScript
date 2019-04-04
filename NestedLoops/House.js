function house(n) {

    //prints the roof
    for (let i = 1; i < n; i++) {
        let roof = "";

        if (n % 2 === 0) {
            roof += "-".repeat(n - 2);
            roof += "*".repeat(n);
            roof += "-".repeat(n - 2);
        } else {
            roof += "-".repeat(n - 1);
            roof += "*";
            roof += "-".repeat(n -1);
        }

        console.log(roof);
    }
}

house([3]);