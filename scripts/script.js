const $ = document

const calculatorDisplay = $.querySelector('.dasplay')
const errorLabel = $.querySelector('.displayBox .error')

const operatorsBtn = $.querySelectorAll('.operator')
const numbersBtn = $.querySelectorAll('.number')

numbersBtn.forEach(number => {
    number.addEventListener('click', e => {
        errorLabel.style.display = 'none'
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
        e.target.value == '=' && (calculatorDisplay.value = calculation(calculatorDisplay.value))

    })
})

function calculation(value){
    try{
        return eval(value)
    }catch{
        errorLabel.style.display = 'block'
        return ''
    }
    
}