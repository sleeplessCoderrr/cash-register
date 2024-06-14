let cid = [
    ['Pennies', 1.01],
    ['Nickels', 2.05],
    ['Dimes', 3.1],
    ['Quarters', 4.25],
    ['Ones', 90],
    ['Fives', 55],
    ['Tens', 20],
    ['Twenties', 60],
    ['Hundreds', 100]
]; 
printCashier(cid);

// Function to print the cashier
function printCashier(cashier){
    const cashierPennis = document.querySelector("#pennies");
    const cashierNickels = document.querySelector("#nickels");
    const cashierDimes = document.querySelector("#dimes");
    const cashierQuarters = document.querySelector("#quarters");
    const cashierOnes = document.querySelector("#ones");
    const cashierFives = document.querySelector("#fives");
    const cashierTens = document.querySelector("#tens");
    const cashierTwenties = document.querySelector("#twenties");
    const cashierHundreds = document.querySelector("#hundreds");
    cashierPennis.innerHTML = "Pennies: $" + cashier[0][1];
    cashierNickels.innerHTML = "Nickels: $" + cashier[1][1];
    cashierDimes.innerHTML = "Dimes: $" + cashier[2][1];
    cashierQuarters.innerHTML = "Quarters: $" + cashier[3][1];
    cashierOnes.innerHTML = "Ones: $" + cashier[4][1];
    cashierFives.innerHTML = "Fives: $" + cashier[5][1];
    cashierTens.innerHTML = "Tens: $" + cashier[6][1];
    cashierTwenties.innerHTML = "Twenties: $" + cashier[7][1];
    cashierHundreds.innerHTML = "Hundreds: $" + cashier[8][1];
    return;
}

//Function when user input the money and calculate the change
document.querySelector("#purchase-btn").addEventListener("click", function() {
    const resultScreen = document.querySelector("#result-screen");
    resultScreen.innerHTML = "";
    const userMoney = parseFloat(document.querySelector("#user-input").value);
    const clear = document.querySelector("#user-input");
    clear.value = "";
    const priceMoney = 3.26;
    let change = [
        ['HUNDRED', 0],
        ['TWENTI', 0],
        ['TEN', 0],
        ['FIVE', 0],
        ['ONE', 0],
        ['QUARTER', 0],
        ['DIME', 0],
        ['NICKEL', 0],
        ['PENNY', 0]
    ];
    let cashier = [
        ['Pennies', 1.01],
        ['Nickels', 2.05],
        ['Dimes', 3.1],
        ['Quarters', 4.25],
        ['Ones', 90],
        ['Fives', 55],
        ['Tens', 20],
        ['Twenties', 60],
        ['Hundreds', 100]
    ]; 
    let changeMoney = userMoney - priceMoney;
    let cashierMoney = cashier.reduce((sum, item) => sum + item[1], 0);

    if (cashierMoney < changeMoney) {
        printResultScreen(cashier, change, 0);
        return;
    }

    while (changeMoney > 0) {
        if (changeMoney >= 100 && cashier[8][1] >= 100) {
            change[0][1] += 100;
            cashier[8][1] -= 100;
            changeMoney -= 100;
        } else if (changeMoney >= 20 && cashier[7][1] >= 20) {
            change[1][1] += 20;
            cashier[7][1] -= 20;
            changeMoney -= 20;
        } else if (changeMoney >= 10 && cashier[6][1] >= 10) {
            change[2][1] += 10;
            cashier[6][1] -= 10;
            changeMoney -= 10;
        } else if (changeMoney >= 5 && cashier[5][1] >= 5) {
            change[3][1] += 5;
            cashier[5][1] -= 5;
            changeMoney -= 5;
        } else if (changeMoney >= 1 && cashier[4][1] >= 1) {
            change[4][1] += 1;
            cashier[4][1] -= 1;
            changeMoney -= 1;
        } else if (changeMoney >= 0.25 && cashier[3][1] >= 0.25) {
            change[5][1] += 0.25;
            cashier[3][1] -= 0.25;
            changeMoney -= 0.25;
        } else if (changeMoney >= 0.1 && cashier[2][1] >= 0.1) {
            change[6][1] += 0.1;
            cashier[2][1] -= 0.1;
            changeMoney -= 0.1;
        } else if (changeMoney >= 0.05 && cashier[1][1] >= 0.05) {
            change[7][1] += 0.05;
            cashier[1][1] -= 0.05;
            changeMoney -= 0.05;
        } else if (changeMoney >= 0.01 && cashier[0][1] >= 0.01) {
            change[8][1] += 0.01;
            cashier[0][1] -= 0.01;
            changeMoney -= 0.01;
        } else {
            break;
        }

        // Avoid floating point precision issues
        changeMoney = Math.round(changeMoney * 100) / 100;
    }

    if(userMoney === priceMoney){
        printResultScreen(cashier, change, 4);
        return;
    } else if(cashierMoney === changeMoney){
        printResultScreen(cashier, change, 1);
        return;
    } else if(cashierMoney > changeMoney){
        printResultScreen(cashier, change, 2);
        return;
    }

    printCashier(cashier);
    return;
});


//Function to print the result screen
function printResultScreen(cashier, change, type){
    const resultScreen = document.querySelector("#result-screen");
    let result = change.filter(item => item[1] > 0);

    const status = document.createElement("h3");
    if(type === 0) status.textContent = "Status: INSUFFICIENT_FUNDS";
    if(type === 1) status.textContent = "Status: CLOSED";
    if(type === 2) status.textContent = "Status: OPEN";
    if(type === 4) status.textContent = "No change due - customer paid with exact cash";
    resultScreen.appendChild(status);
    
    result.forEach((item => {
        const resultConatiner = document.createElement("div");
        resultConatiner.classList.add("result-container");

        const resultType = document.createElement("p");
        resultType.textContent = item[0] + ":";

        const resultAmount = document.createElement("p");
        resultAmount.textContent = "$" + item[1];

        resultConatiner.appendChild(resultType);
        resultConatiner.appendChild(resultAmount);
        resultScreen.appendChild(resultConatiner);
    }));
    printCashier(cashier);
    return;
}
