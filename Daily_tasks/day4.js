//Task 1
function calculateMoneyOnDay(day) {
    if (day === 0) {
        return 1;
    } else if (day === 1) {
        return 2;
    } else {
        let prevDay = 1;
        let currDay = 2;
        for (let i = 2; i < day; i++) {
            let nextDay = prevDay + currDay;
            prevDay = currDay;
            currDay = nextDay;
        }
        return currDay;
    }
}
const moneyOn14thDay = calculateMoneyOnDay(14);
console.log("Money on the 14th day:", moneyOn14thDay);

// Task2
let earnings = 1, day = 0, balance = 0;

while (balance < 1000) {
    balance += earnings;
    day++;
    earnings *= 2;
}

console.log(`On day ${day} total money earned will be ${balance}`);

//additional task 

earnings = 1;
day = 0;

while (earnings <= 1000) {
    earnings *= 2;
    day++;
}

console.log(`On day ${day} earning will be 1000`)