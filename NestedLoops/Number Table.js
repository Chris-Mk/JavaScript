function numberTable(input) {
    let n = Number(input.shift());

    for (let rows = 0; rows < n; rows++) {
        let result = "";
        for (let columns = 0; columns < n; columns++) {
            let num = rows + columns + 1;

            if (num > n) {
                num = 2 * n - num;
            }

            result += num + " ";
        }
        console.log(result);
    }
}

numberTable([4]);