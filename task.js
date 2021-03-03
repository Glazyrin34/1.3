"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let S = amount - contribution; // тело кредита
    let P = percent / 100 / 12; // 1/12 процентной ставки
    let date1 = new Date();
    let n = (date.getFullYear()*12 + date.getMonth()) - (date1.getFullYear()*12 + date1.getMonth());
    
    if ((percent < 0 ||  contribution < 0 || amount < 0 || n < 0 ) || 
    (isNaN(percent) === true|| isNaN(contribution) === true || isNaN(amount) === true || isNaN(date) === true)) {
        return "Ошибка данные введены неверно";
    }

    let monthAmount = S * ( P + P / (((1 + P) ** n) - 1));
    let totalAmount = monthAmount * n;

    return totalAmount.toFixed(2);

}

function getGreeting(name) {
    
    if (name === "" || name === null || name === undefined) {
        name = "Аноним";
    } 

    let greeting = `Привет, мир! Меня зовут ${name}.`;
    
    return greeting;
}