//Task 1
console.log("\nOutput for task 1:");
let applicants = {
    Suresh: "Java",
    Ramesh: 'NodeJs',
    Mahesh: "HTML",
    Ganesh: "NestJs",
    Ritesh: "Python"
};
for (let name in applicants) {
    if (applicants[name] == "NodeJs" || applicants[name] == "NestJs") {
        console.log(name);
    }
}

// Task 2
console.log("\nOutput for task 2:");
let students = [];
for (i = 1; i < 31; i++) {
    students.push({ name: `student${i}`, marks: 4 * i });

}
for (j in students) {
    if (students[j].marks > 35 && students[j].marks < 60) {
        console.log(students[j]);
    }
}
// Task 3
console.log("\nOutput for task 3:");

let sports = [];
let cinema = [];
let books = [];
let programming = [];

let student = [
    { name: "Suresh", interest: ["Sports", "Cinema"] },
    { name: "Ramya", interest: ["Books", "Programming"] },
    { name: "John", interest: ["Sports", "Books"] },
    { name: "David", interest: ["Cinema", "Programming"] },
];

student.map(stu => {
    if (stu.interest.includes("Sports")) {
        sports.push(stu.name);
    } if (stu.interest.includes("Cinema")) {
        cinema.push(stu.name);
    }
    if (stu.interest.includes("Programming")) {
        programming.push(stu.name);
    }
    if (stu.interest.includes("Books")) {
        books.push(stu.name);
    }
});

console.log(`Students interested in sports are \n${sports}\n`);
console.log(`Students interested in books are \n${books}\n`);
console.log(`Students interested in programming are \n${programming}\n`);
console.log(`Students interested in cinema are\n${cinema}\n`);

//Task4 
console.log("\nOutput for task 4:");
let info = {
    name: "Abhi",
    age: "29"
};

let extraInfo1 = {
    weigth: "70kg"
};

let extraInfo2 = {
    height: "175cm",
    hair_color: "Brown"
};

let fullInfo = { ...info, ...extraInfo1, ...extraInfo2 };
console.log(fullInfo);