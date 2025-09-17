import {sayHello} from './greet.js'
import Student from "./greet.js"
import { jSS1 } from "./greet.js"
import {students, list} from './apk.js'
// import { default as Student } from './greet.js'

import colors from 'colors';

const module = await import('./greet.js')
console.log(colors.green(`Description: ${module.gigs}`));

sayHello('John Dave');

students.introduce();

console.log(list);

let student = new Student(50);
let student1 = new jSS1 (100);

console.log(colors.blue(student.getWater(60)));
console.log(colors.blue(student.addWater(60)));
console.log(colors.blue(student.water));
console.log(colors.red(student1.getWater()));
console.log(colors.red(student1.addWater(200)));
console.log(colors.red(student1.water));

// Built-in modules
import { stdin } from 'process';
// Third-party module
import chalk from 'chalk';
// Custom modules
import { checkAge } from './ageCheck.js';
import { formatUserInfo } from './userinfo.js';

console.log(chalk.red('What is your name?'));

// Using process.stdin to get user input
stdin.on('data', (nameInput) => {
    const name = String(nameInput).trim();
    
    console.log(chalk.red('What is your age?'));
    
    // Second input for age
    stdin.once('data', (ageInput) => {
        const age = parseInt(String(ageInput));
        
        // Using custom module to check age
        const status = checkAge(age);
        
        // Using custom module to format the message
        const message = formatUserInfo(name, age, status);
        
        // Using third-party module to add color
        if (status === 'adult') {
            console.log(chalk.green(message));
        } else {
            console.log(chalk.blue(message));
        }
        
        process.exit();
    });
});

async function loadModule() {
    const module = await import('../mymodule/greet.js')
    module.greet();
}
loadModule();
