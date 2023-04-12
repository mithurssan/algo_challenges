const calculate = require("./calculate");
const prompt = require('prompt-sync')({ sigint: true });
const colours = require("ansi-colors");


const calculation = () => {

    const userInput = prompt("Please enter two numbers and a sign (e.g. 1 2 +): ");
    try {
        const [num1, num2, sign] = userInput.split(" ");

        if (isNaN(num1) || isNaN(num2) || !["+", "-", "/", "*"].includes(sign)) {
            throw new Error(colours.yellow("Invalid input"));
        }

        const ans = calculate(Number(num1), Number(num2), sign);
        const col = ans > 0 ? colours.red : ans < 0 ? colours.green : colours.yellow;
        console.log(col(ans));
    }
    catch (err) {
        console.log(colours.yellow(err.message));
    }
    calculation();
}
calculation();
