"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let S = amount - contribution; // тело кредита
    let P = percent / 100 / 12; // 1/12 процентной ставки
    let date1 = new Date()

    let n = (date.getFullYear()*12 + date.getMonth()) - (date1.getFullYear()*12 + date1.getMonth());
    let monthAmount = S * ( P + P / (((1 + P) ** n) - 1));
    let totalAmount = monthAmount * n;

    return totalAmount.toFixed(2);

}

function getGreeting(name) {
    
    let greeting;

    if (name === "" || name === null || name === undefined) {
        greeting = "Привет, мир! Меня зовут Аноним.";
    } else {
        greeting = `Привет, мир! Меня зовут ${name}.`
    }
    
    return greeting;
}