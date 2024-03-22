const prompt = require('prompt-sync')();

const user1 = prompt('Enter  player1 name:');
const user2 = prompt('Enter  player2 name:');
console.log(`Player 1 is :  ${user1}`);
console.log(`Player 2 is :  ${user2}\n`);

let starts = prompt('Who will Start the game?:');

let u1 = false;
let u2 = false;

let score1 = 0, score2 = 0;
if (starts === user1) {
    console.log(`\n ${user1} have started the game.\n`);
    u1 = true;
} else if (starts === user2) {
    console.log(`\n ${user2} have started the game.\n`);
    u2 = true;
} else {
    console.log("\nInvalid input! Please enter either Player1 or Player2.\n")
};
prompt("Hit enter\n");
while (score1 < 20 && score2 < 20) {
    if (u1) {
        var num = Math.floor(Math.random() * 7);
        console.log(`${user1} , you got ${num}\n`);
        if (num === 0) {
            console.log(`Oops ${user1} you should start again from zero\n`);
            score1 = 0;
            console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
            console.log(`Giving the chance to ${user2}\n`);
            u2 = true;
            u1 = false;

        }
        else {
            score1 += num;
            const r1 = prompt(user1 + " do you want to continue (y/n) :").toLowerCase();
            if (r1 === "n") {
                u2 = true;
                u1 = false;
                console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
                console.log(`Giving the chance to ${user2}\n`);
            }
            if (r1 === "y") {
                u1 = true;
                console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
            }
        }

    }
    else if (u2) {
        const num = Math.floor(Math.random() * 7);
        console.log(`${user2} , you got ${num}\n`);
        if (num === 0) {
            console.log(`Oops ${user2} you should start again from zero\n`);
            score2 = 0;
            console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
            console.log(`Giving the chance to ${user1}\n`);
            u1 = true;
            u2 = false;

        }
        else {
            score2 += num;
            let r2 = prompt(user2 + " do you want to continue (y/n):").toLowerCase();

            if (r2 === "n") {
                u1 = true;
                u2 = false;
                console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
                console.log(`Giving the chance to ${user1}\n`);
            }
            if (r2 === "y") {
                u2 = true;
                console.log(`Scores are ${user1} : ${score1} | ${user2} : ${score2}\n`);
            }
        }

    }
}

if (score1 >= 20) {
    console.log(user1 + " wins the game!\n");
}
else {
    console.log(user2 + " wins the game!\n");
}




