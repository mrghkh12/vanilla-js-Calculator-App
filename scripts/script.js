const $ = document

const calculatorDisplay = $.querySelector('.dasplay')

const operatorsBtn = $.querySelectorAll('.operator')
const numbersBtn = $.querySelectorAll('.number')

numbersBtn.forEach(number => {
    number.addEventListener('click', e => {
        calculatorDisplay.value += e.target.value
    })
})

operatorsBtn.forEach(operator => {
    operator.addEventListener('click', e => {
        e.target.value == 'AC' && (calculatorDisplay.value = '')
        e.target.value == 'DE' && (calculatorDisplay.value = calculatorDisplay.value.toString().slice(0,-1))
        e.target.value == '.' && (calculatorDisplay.value += '.')
        e.target.value == '/' && (calculatorDisplay.value += '/')
        e.target.value == '*' && (calculatorDisplay.value += '*')
        e.target.value == '-' && (calculatorDisplay.value += '-')
        e.target.value == '+' && (calculatorDisplay.value += '+')
        e.target.value == '=' && (calculatorDisplay.value = eval(calculatorDisplay.value))

    })
})