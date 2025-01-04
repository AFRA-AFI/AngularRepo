"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var initialMenu = function () {
    console.log("Welcome! Please select an option:");
    console.log("1. Login");
    console.log("2. EXit");
    rl.question('Enter your choice: ', function (choice) {
        if (choice === '1') {
            login();
        }
        else if (choice === '2') {
            exit();
        }
        else {
            console.log("Invalid Choice...Try again!!!");
            initialMenu();
        }
    });
};
function login() {
    rl.question('Enter Username: ', function (username) {
        rl.question('Enter password: ', function (password) {
            if (username == 'admin' && password == 'admin123') {
                loggedInMenu();
            }
            else {
                console.log("Invalid Username and Password");
                login();
            }
        });
    });
}
function loggedInMenu() {
    console.log("Logged in Menu\n1.All Jobs\n2.My Applications");
    rl.question('Enter your choice: ', function (choice) {
        if (choice === '1') {
            allJobs();
        }
        else if (choice === '2') {
            myApplication();
        }
        else {
            console.log("Invalid Choice:");
            loggedInMenu();
        }
    });
}
function allJobs() {
    var joblist = [
        {
            jobtitle: "angular developer",
            experience: "2years",
            qualification: "btech"
        },
        {
            jobtitle: ".net ddeveloper",
            experience: "3 years",
            qualification: "Mtech"
        },
        {
            jobtitle: "java developer",
            experience: "2 years",
            qualification: "MCA"
        }
    ];
    console.log("\n...............Job list............\n");
    joblist.forEach(function (list) {
        console.log("jobtitle:" + list.jobtitle + " experience:" + list.experience + " qualification:" + list.qualification + "\n");
    });
    redirectMenu();
}
function myApplication() {
    var applicationlist = [
        {
            jobtitle: "angular developer",
            experience: "2years",
            qualification: "btech"
        },
        {
            jobtitle: ".net ddeveloper",
            experience: "3 years",
            qualification: "Mtech"
        },
        {
            jobtitle: "java developer",
            experience: "2 years",
            qualification: "MCA"
        }
    ];
    console.log("\n...............Application list............\n");
    applicationlist.forEach(function (list) {
        console.log("jobtitle:" + list.jobtitle + " experience:" + list.experience + " qualification:" + list.qualification + "\n");
    });
    redirectMenu();
}
var redirectMenu = function () {
    rl.question('Redirect to previous menu? (Y/N): ', function (choice) {
        if (choice.toLowerCase() === 'y') {
            initialMenu();
        }
        else if (choice.toLowerCase() === 'n') {
            exit();
        }
        else {
            console.log('Invalid choice. Exiting...');
            exit();
        }
    });
};
function exit() {
    rl.close();
}
initialMenu();
