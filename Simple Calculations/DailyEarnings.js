function dailyEarnings(input) {
    let workingDays = parseInt(input.shift());
    let dailyExpenditure = parseFloat(input.shift());
    let exchangeRate = parseFloat(input.shift());
    
    let monthlySalary = workingDays * dailyExpenditure;
    let annualSalary = (monthlySalary * 12) + (monthlySalary * 2.5);
    let afterTax = annualSalary * .75;
    let salaryBGN = afterTax * exchangeRate;
    let dailyProfit = salaryBGN / 365;
    
    console.log(dailyProfit.toFixed(2));
}

dailyEarnings([21, 75.00, 1.59]);