#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your to-do list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Are you sure you want to add more in your to-do list?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
