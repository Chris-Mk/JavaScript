function triangleArea(input) {
    let base = Number(input.shift());
    let height = Number(input.shift());
    let area = base * height / 2;

    console.log(area.toFixed(2));
}

triangleArea([20, 30]);