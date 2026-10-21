
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0
                ? "Error: Cannot divide by zero"
                : a / b;
        default:
            return "Invalid operator";
    }
}

rl.question("Enter first number: ", (first) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
        rl.question("Enter second number: ", (second) => {
            const a = Number(first);
            const b = Number(second);

            if (
                first.trim() === "" ||
                second.trim() === "" ||
                !Number.isFinite(a) ||
                !Number.isFinite(b)
            ) {
                console.log("Please enter valid numbers.");
            } else {
                console.log("Result:", calculate(a, operator.trim(), b));
            }

            rl.close();
        });
    });
});
