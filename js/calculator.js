const calculator = document.querySelector(".calculator")
const calcOutput = document.querySelector('#calcOutput p');

const btn = document.querySelectorAll('button');
const keypad = document.querySelector('.numberpad');



const calculate = (n1, operator, n2) => {
    if (operator === "add") {
        return parseFloat(n1) + parseFloat(n2);
    } 
    
    if (operator === "subtract") {
        return parseFloat(n1) - parseFloat(n2);
    } 

    if (operator === 'multiply') {
        return parseFloat(n1) * parseFloat(n2);
    }

    if (operator === 'divide') {
        return parseFloat(n1) / parseFloat(n2);
    };

    return result;
};


keypad.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const displayedNum = calcOutput.textContent;
        const keycontent = key.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;

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
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = "operator";
    
        };


        if (!action) {
            if (displayedNum === '0' || previousKeyType === "operator") {
                calcOutput.textContent = keycontent;
            } else {
                calcOutput.textContent = displayedNum + keycontent;
            };
            calculator.dataset.previousKeyType = 'number';
        };
        
        if (action === "decimal" && (!calcOutput.textContent.includes('.'))) {
            calcOutput.textContent += '.'; 
            calculator.dataset.previousKey.Type = 'decimal';
        };

        if (action === "clear") {
            console.log('clear!')
            calculator.dataset.previousKeyType = 'clear';
        };

        if (action === "operate") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            calcOutput.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = 'calculate';
        };

        console.log(previousKeyType);
    };
});
