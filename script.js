let display = document.getElementById("display");

// Add number or operator
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate answer
function calculate() {

    try {

        let expression = display.value;

        // Pi
        expression = expression.replace(/π/g, "Math.PI");

        // Euler's number
        expression = expression.replace(/\be\b/g, "Math.E");

        // Square root
        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");

        // Log base 10
        expression = expression.replace(/log\(/g, "Math.log10(");

        // Natural log
        expression = expression.replace(/ln\(/g, "Math.log(");

        // Power
        expression = expression.replace(/\^/g, "**");

        // Trigonometric functions
        expression = expression.replace(
            /sin\((.*?)\)/g,
            "Math.sin(($1) * Math.PI / 180)"
        );

        expression = expression.replace(
            /cos\((.*?)\)/g,
            "Math.cos(($1) * Math.PI / 180)"
        );

        expression = expression.replace(
            /tan\((.*?)\)/g,
            "Math.tan(($1) * Math.PI / 180)"
        );

        // Calculate
        let result = eval(expression);

        // Round long decimal answers
        display.value = Number(result.toFixed(10));

    } catch (error) {

        display.value = "Error";

    }
}

