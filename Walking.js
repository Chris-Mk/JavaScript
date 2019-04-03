function walking(input) {
    let totalSteps = 0;

    while (totalSteps < 10000) {
        let steps = input.shift();
        
        if (steps === "Going home") {
            totalSteps += Number(input.shift());
            break;
        } else {
            totalSteps += Number(steps);
        }
    }

    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!")
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}

walking([1500, 300, 2500, 3000, "Going home", 200]);