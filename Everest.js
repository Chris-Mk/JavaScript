function everest(input) {
    let command = input.shift();
    let totalClimbedDistance = 5364;
    let days = 1;
    let hasReached = false;

    while (command !== "END") {
        let distanceClimbed = Number(input.shift());
        totalClimbedDistance += distanceClimbed;
        
        if (command === "Yes") {
            days++;

            if (days === 5) {
                hasReached = false;
                break;
            }
        }

        if (totalClimbedDistance >= 8848) {
            hasReached = true;
            break;
        }

        command = input.shift();
    }

    if (hasReached) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!\n${totalClimbedDistance}`);
    }
}

everest(["Yes", 1254, "Yes", 1402, "No", 250, "Yes",635]);
everest(["Yes", 1000, "Yes", 945, "No", 1200, "END"]);
everest(["Yes", 535, "Yes", 849, "Yes", 499, "Yes", 400]);
everest(["Yes", 700, "END"]);