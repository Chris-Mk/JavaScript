function inchesToCm(input) {
    let inches = Number(input.shift());
    let cm = inches * 2.54;
    console.log(cm.toFixed(2));
}

inchesToCm([5]);