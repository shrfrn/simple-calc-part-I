'use strict'

var num1, num2
var operator = ''

function onNumClick(elCell) {
    console.log(elCell.innerText)
    if(!num1) num1 = +elCell.innerText
    else if (operator) num2 = +elCell.innerText
    else return
}

function onOperatorClick(elCell) {
    if(!num1 || num2) return
    operator = elCell.innerText
}

function onCalcRes() {
    if(!num2) return

    var res = num1+ num2
    var strCalc = num1 + ' + ' + num2 + ' = ' + res 
    
    console.log(strCalc)
    
    num1 = num2 = 0
    operator = ''
}