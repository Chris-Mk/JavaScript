function salary(input) {
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());
    let noSalary = false;

    for (let i = 0; i < openTabs; i++) {
        let website = input.shift();
        
        if (website == "Facebook") {
            salary -= 150;
        } else if (website == "Instagram") {
            salary -= 100;
        } else if (website == "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            noSalary = true;
            break;
        }
    }
    
    if (!noSalary) {
        console.log(salary);
    } else {
        console.log("You have lost your salary.");
    }
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);