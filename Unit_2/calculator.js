function calculate(operation) {
    const num1 = parseFloat(document.getElementById("n1").value);
    const num2 = parseFloat(document.getElementById("n2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "mul":
                result = num1 * num2;
                break;
            case "div":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Unknown operation";
        }
    }

    document.getElementById("result").innerText = "Result: " + result;
}
