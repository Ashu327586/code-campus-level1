// Task 1 
console.log("Task 1 output :\n")
class Calculator {
    constructor(a, b) {
        this.num1 = (a);
        this.num2 = (b);
    }
    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        if (this.num2 == 0) {
            console.log("Division by zero is not defined!");
        }
        return this.num1 / this.num2;
    }
}

obj = new Calculator(5, 3);

console.log('Addition: ', obj.add());
console.log('Subtraction: ', obj.sub());
console.log('Product: ', obj.mul());
console.log('Divison: ', obj.div());

//Task 2
console.log("\nTask 2 output :\n")
class Bank {
    constructor() {
        this.balance = 1000; // Considering the minimum deposit on  opening a bank account to be Rs.  1000
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Current balance : ${this.balance}`);
    }
    withdrawal(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds! Current Balance  : ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawal successful! Your current balance is ${this.balance}`);
        }
    }
    checkBalance() {
        console.log(this.balance);
    }
}
let user = new Bank();
user.checkBalance();
user.deposit(500);
user.withdrawal(2000);
user.withdrawal(700);



