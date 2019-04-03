function rectArea(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let xDifference = Math.abs(x2 - x1);
    let yDifference = Math.abs(y2 - y1);

    let area = xDifference * yDifference;
    let perimeter = 2 * (xDifference + yDifference);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

rectArea([60, 20, 10, 50]);