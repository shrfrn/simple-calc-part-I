'use strict'

var num1 = '', num2 = ''
var operator = ''
var state = 'num1'

function onNumClick(elCell) {
    if(state === 'num1') num1 += elCell.innerText
    else if (state === 'num2') num2 += elCell.innerText
    else return
}

function onOperatorClick(elCell) {
    if(state !== 'num1') return
    operator = elCell.innerText
    state = 'num2'
}

function onCalcRes() {
    if(!num2) return

    var res = +num1 + +num2
    var strCalc = num1 + ' + ' + num2 + ' = ' + res 
    
    console.log(strCalc)
    
    num1 = num2 = operator = ''
    state = 'num1'
}