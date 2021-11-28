const addition = (a, b) => {
    return a + b;
};
const subtraction = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const calculator = document.querySelector(".calculator")
const calcOutput = document.querySelector('#calcOutput p');

const btn = document.querySelectorAll('button');
const keypad = document.querySelector('.numberpad');


btn.forEach(function(button) {
    button.addEventListener("click", (e) => {
        
    })
}) 

keypad.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const displayedNum = calcOutput.textContent;
        const keycontent = key.textContent;

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        if (
            action === "add" ||
            action === "subtract" || 
            action === "multiply" ||
            action === "divide"
        ) {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            key.classList.add('is-depressed')
        

        
        }
        if (!action) {
            if (displayedNum === '0') {
                calcOutput.textContent = keycontent;
            } else {
                calcOutput.textContent += keycontent;
            }
            console.log(typeof calcOutput.textContent)
        }
        if (action === "decimal" && (!calcOutput.textContent.includes('.'))) {
            calcOutput.textContent += '.'; 
        }
    };
});
