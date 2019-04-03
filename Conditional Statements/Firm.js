function firm(input) {
    let hours = Number(input.shift());
    let days = Number(input.shift());
    let employees = Number(input.shift());

    let noneWorkingDays = days * 0.1;
    let workingDays = days - noneWorkingDays;
    let workingHours = 8 * workingDays * employees;
    let employeesHrs = employees * 2;
    let employHrsForWorkingDays = employeesHrs * workingDays;
    let hrDiff = Math.abs(hours - employHrsForWorkingDays);

    if (workingHours <= hours) {
        console.log(`Yes!${Math.floor(hrDiff)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.floor(hrDiff)} hours needed.`);
    }
}

firm([90, 7, 3]);