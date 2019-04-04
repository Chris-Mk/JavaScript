function numberPyramid(input) {
    let n = Number(input.shift());
    let num = 1;
    let result = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (columns > 1) {
                result += " ";
            }

            result += num;
            num++;

            if (num > n) break;
        }
        console.log(result);
        result = "";

        if (num > n) break;
    }
}

numberPyramid([7]);