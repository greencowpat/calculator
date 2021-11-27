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
const calcOutput = document.querySelector('#calcOutput p');

const digit = document.querySelectorAll('.digit button')
const btn = document.querySelectorAll('button')

btn.forEach(function(button) {
    button.addEventListener("click", (e) => {
        console.log(e.target)
    })
})
