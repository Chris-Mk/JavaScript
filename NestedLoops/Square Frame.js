function squareFrame(input) {
    let n = Number(input.shift());

    //prints the top row
    let topRow = "+";
    for (let i = 0; i < n - 2; i++) {
        topRow += " -";
    }
    topRow += " +";
    console.log(topRow);

    //prints the middle part
    for (let rows = 0; rows < n -2; rows++) {
        let middleRow = "|";

        for (let columns = 0; columns < n - 2; columns++) {
            middleRow += " -";
        }
        middleRow += " |";
        console.log(middleRow);
    }

    //prints the bottom row
    let bottomRow = "+";
    for (let i = 0; i < n - 2; i++) {
        bottomRow += " -";
    }
    bottomRow += " +";
    console.log(bottomRow);
}

squareFrame([3]);