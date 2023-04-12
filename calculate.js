
const calculate = (num1, num2, str) => {
    
    switch(str) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
        
        case "/":
            return num1 / num2;
        
        case "*":
            return num1 * num2;
    }

}

module.exports = calculate;


