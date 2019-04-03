function trainingLab(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());

    let cmLength = length * 100;
    let cmWidth = width * 100;
    let rows = Math.floor(cmLength / 120);
    let columns = Math.floor((cmWidth - 100) / 70);
    let seats = rows * columns - 3;

    console.log(Math.trunc(seats));
}

trainingLab([8.4, 5.2]);