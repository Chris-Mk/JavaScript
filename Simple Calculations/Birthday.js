function birthday(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentage = Number(input.shift());

    let totalVolume = length * width * height / 1000;
    let waterVolume = totalVolume * (100 - percentage) / 100;

    console.log(waterVolume.toFixed(3));
}

birthday([85, 75, 47, 17]);