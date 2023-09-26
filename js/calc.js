'use strict'

var num1, num2
var operator = '+'

function onNumClick(elCell) {
    console.log(elCell.innerText)
    if(!num1) num1 = +elCell.innerText
    else if (operator) num2 = +elCell.innerText
    else return
}