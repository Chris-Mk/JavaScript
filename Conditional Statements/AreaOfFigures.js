function areaOfFigures(input) {
    let figure = input.shift();
    let area = 0;

    if (figure == 'square') {
        let side = Number(input.shift());
        area = side * side;
    } else if (figure == 'triangle') {
        let height = Number(input.shift());
        let base = Number(input.shift());
        area = height * base * .50;
    } else if (figure == 'rectangle') {
        let length = Number(input.shift());
        let width = Number(input.shift());
        area = length * width;
    } else if (figure == 'circle') {
        let radius = Number(input.shift());
        area = Math.PI * Math.pow(radius, 2);
    }

    console.log(area.toFixed(3));
}

areaOfFigures(['circle', 6]);