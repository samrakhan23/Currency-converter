#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
  PKR: 1,
  EUR: 0.0034,
  USD: 0.0036,
  INR: 0.3,
  GBP: 0.0029,
};

let answer = await inquirer.prompt([
  {
    name: "fromCurrency",
    message: "Enter your From currency",
    type: "list",
    choices: ["USD", "EUR", "PKR", "INR", "GBP"],
  },
  {
    name: "toCurrency",
    message: "Enter your To currency",
    type: "list",
    choices: ["USD", "EUR", "PKR", "INR", "GBP"],
  },
  {
    name: "amount",
    message: "Enter your Amount",
    type: "number",
  },
]);

let fromAmount: any = currency[answer.fromCurrency];
let toAmount: any = currency[answer.toCurrency];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(chalk.green(`You have converted ${amount} ${answer.fromCurrency} to ${answer.toCurrency}`))

console.log(chalk.red(`Your Converted Amount is ${convertedAmount}`));
