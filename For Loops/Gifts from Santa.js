function santaGifts(input) {
    let N = Number(input.shift());
    let M = Number(input.shift());
    let S = Number(input.shift());

    let result = "";
    for (let i = M; i >= N; i--) {

        if (i % 2 === 0 && i % 3 === 0) {
            if (i !== S) {
                result += i + " ";
            } else {
                break;
            }
        }
    }

    console.log(result);
}

santaGifts([1, 30, 15]);