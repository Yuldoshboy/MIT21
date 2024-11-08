const moment = require("moment");
setInterval(() => {
    const time = moment().format();
    console.log(`Hozirgi vaqt: ${time}`);
}, 5000);


const inquirer = require("inquirer");

// inquirer
// .prompt([{ type: 'input', name: 'raqam', message: 'Raqamni kiriting!'}])
// .then((answer) => {
//     console.log('Man kiritgan raqam:', answer.raqam);
// })
// .catch(err => console.log("Error!"));

// console.log('==================');

// inquirer
//   .prompt([{
//       type: 'input',
//       name: 'car',
//       message: 'What is your car?',
//     },
//     {
//       type: 'list',
//       name: 'favoriteCar',
//       message: 'What is your favorite car?',
//       choices: ['BMW', 'Mercedec Benz', 'Kia', 'Volvo'],
//     },
//     {
//       type: 'list',
//       name: 'confirmPurchase',
//       message: 'Do you want to buy any of these cars?',
//       choices: ['Yes, of course', 'No, I have no money!']
//     },
//   ])
//   .then((answers) => {
//     console.log(`Hello, I know your car is ${answers.car}!`);
//     console.log(`So, your favorite car is ${answers.favoriteCar}.`);
//     console.log(`Do you want to buy a new car?: 
//     -${answers.confirmPurchase}.`);
//   })
//   .catch((err) => {
//     if (err.isTtyError) {
//       console.log("Your terminal doesn't support interactive prompts.");
//     } else {
//       console.log("An error occurred:", err);
//     }
//   });

  const validator = require("validator");
  // const test = validator.isEmail('syuldoshboygmail.com');
  const a = validator.isInt("22");
  console.log("Result:", a);
  //isIP
  const b = validator.isIP("22");
  console.log("Result:", b);
  //isUppercase
  const c = validator.isUppercase("SOBIROV");
  console.log("Result:", c);
  //isStrongPasswordnpm
  const passwords = validator.isStrongPassword('19950110Sarvar@');
  console.log("Result:", passwords);

  const chalk = require('chalk');
  const log = console.log;
//   log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}`);


  const { v4: uuidv4 } = require('uuid');
  const random = uuidv4();
  console.log("Random:", random);



  const { nanoid } = require("nanoid");

  // Generate a Nano ID
  const id = nanoid();
  console.log(`Nano ID: ${id}`);
    
    
// Core Module package ----

const cpuk = require("os").cpus();
console.log(cpuk.length);