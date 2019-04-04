function examTime(input) {
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arrivalHour = Number(input.shift());
    let arrivalMinutes = Number(input.shift());

    let late = 'Late';
    let onTime = 'On time';
    let early = 'Early';

    let examMins = examHour * 60 + examMinutes;
    let arrivalMins = arrivalHour * 60 + arrivalMinutes;
    let totalMinsDiff = arrivalMins - examMins;

    let studentArrival = late;
    if (totalMinsDiff < -30) {
        studentArrival = early;
    } else if (totalMinsDiff <= 0) {
       studentArrival = onTime;
    }

    let result = '';
    if (totalMinsDiff !== 0) {
        let hrsDiff = Math.floor(Math.abs(totalMinsDiff / 60));
        let minsDiff = Math.abs(totalMinsDiff % 60);
        if (hrsDiff > 0) {
            if (minsDiff < 10) {
                result = `${hrsDiff}:0${minsDiff} hours`;
            } else {
                result = `${hrsDiff}:${minsDiff} hours`;
            }
        } else {
            result = minsDiff + ' minutes';
        }

        if (totalMinsDiff < 0) {
            result += ' before the start';
        } else {
            result += ' after the start';
        }
    }

    console.log(studentArrival);
    if (result !== 0) {
        console.log(result);
    }
}

examTime([16, 00, 15, 00]);