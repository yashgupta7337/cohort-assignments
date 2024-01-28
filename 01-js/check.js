// this file is to code and run program before submitting it

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Division by zero");
        }
        this.result /= num;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    evaluateExpression(str) {
        // Check for balanced parentheses
        let stack = [];
        for (let ch of str) {
            if (ch === '(') {
                stack.push(ch);
            } else if (ch === ')') {
                if (stack.length === 0) {
                    throw new Error("Unbalanced parentheses");
                }
                stack.pop();
            }
        }
        if (stack.length > 0) {
            throw new Error("Unbalanced parentheses");
        }

        // Evaluate the expression
        try {
            return eval(str);
        } catch (e) {
            throw new Error("Invalid expression");
        }
    }

    calculate(str) {
        // Remove extra spaces and validate characters
        str = str.replace(/\s+/g, "");
        if (/[^0-9+\-*/().]/.test(str)) {
            throw new Error("Invalid characters in expression");
        }

        this.result = this.evaluateExpression(str);
    }
}

// Example usage
try {
    let calc = new Calculator();
    calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");


    console.log(calc.getResult()); // Should print the result of the expression
    calc.clear();
    calc.calculate("5 / 0");
    if (calc.getResult() == Infinity) {
        throw new Error("Division by zero");
    } else
        console.log(calc.getResult()); // Should print the result of the expression
} catch (error) {
    console.error(error.message);
}
