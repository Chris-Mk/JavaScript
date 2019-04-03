function swimmingRecord(input) {
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timePerMeter = Number(input.shift());

    let totalTime = timePerMeter * distance;
    let dragTime = Math.floor((distance / 15)) * 12.5;
    let effectiveTime = totalTime + dragTime;

    if (effectiveTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${effectiveTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(effectiveTime - record).toFixed(2)} seconds slower.`);
    }
}

swimmingRecord([55555.67, 3017, 5.03]);