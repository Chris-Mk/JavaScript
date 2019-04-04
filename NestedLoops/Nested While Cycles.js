function whileCycles() {
    let i = 0;
    let a = 3;
    let b = 3;

    while (i < a) {
        console.log("i = " + i);

        let j = 0;
        while (j < b) {
            console.log ("j = " + j);
            j++;
        }
        console.log();
        i++;
    }
}

whileCycles();