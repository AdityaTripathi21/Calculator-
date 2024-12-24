const calcInput = document.getElementById("user-input");

function clearDisplay() {
    calcInput.value = "";
}

function calculateResult() {
    try {
        if (calcInput.value.includes("/0")) {
            calcInput.value = "Cannot divide by 0";
        } 
        else {
            calcInput.value = eval(calcInput.value);
         }
        }
    catch {
        calcInput.value = "Error";
    }
}

function appendToDisplay(value) {
    calcInput.value += value;
}

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const action = button.getAttribute("data-action");
        const digit = button.getAttribute("data-digit");
        const operator = button.getAttribute("data-operator");

        if (action === "clear") {
            clearDisplay();
        } else if (action === "=") {
            calculateResult();
        } else if (digit || operator || action === ".") {
            appendToDisplay(button.textContent);
        }
    });
});
