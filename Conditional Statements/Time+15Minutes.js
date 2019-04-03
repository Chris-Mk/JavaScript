function time15Mins(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    let after15Minutes = minutes + 15;

    if (after15Minutes >= 60) {
        hours += 1;   
        after15Minutes %= 60;
    }

    if (hours > 23) {
        hours = 0;
    }

    if (after15Minutes < 10) {
        console.log(`${hours}:0${after15Minutes}`);
    } else {
        console.log(`${hours}:${after15Minutes}`);
    }
}

time15Mins([23, 59]);