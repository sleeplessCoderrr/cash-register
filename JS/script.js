let price = 19.5;
let cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
printCashier(cid);

// Function to print the cashier
function printCashier(cid){
    const cashierPennis = document.querySelector("#pennies");
    const cashierNickels = document.querySelector("#nickels");
    const cashierDimes = document.querySelector("#dimes");
    const cashierQuarters = document.querySelector("#quarters");
    const cashierOnes = document.querySelector("#ones");
    const cashierFives = document.querySelector("#fives");
    const cashierTens = document.querySelector("#tens");
    const cashierTwenties = document.querySelector("#twenties");
    const cashierHundreds = document.querySelector("#hundreds");
    cashierPennis.innerHTML = "Pennies: $" + cid[0][1];
    cashierNickels.innerHTML = "Nickels: $" + cid[1][1];
    cashierDimes.innerHTML = "Dimes: $" + cid[2][1];
    cashierQuarters.innerHTML = "Quarters: $" + cid[3][1];
    cashierOnes.innerHTML = "Ones: $" + cid[4][1];
    cashierFives.innerHTML = "Fives: $" + cid[5][1];
    cashierTens.innerHTML = "Tens: $" + cid[6][1];
    cashierTwenties.innerHTML = "Twenties: $" + cid[7][1];
    cashierHundreds.innerHTML = "Hundreds: $" + cid[8][1];
    return;
}

//Function when user input the money and calculate the change
document.querySelector("#purchase-btn").addEventListener("click", function() {
    const resultScreen = document.querySelector("#change-due");
    resultScreen.innerHTML = "";
    const userMoney = parseFloat(document.querySelector("#cash").value);
    const clear = document.querySelector("#cash");
    clear.value = "";

    if(userMoney < price){
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    let change = [
        ['HUNDRED', 0],
        ['TWENTY', 0],
        ['TEN', 0],
        ['FIVE', 0],
        ['ONE', 0],
        ['QUARTER', 0],
        ['DIME', 0],
        ['NICKEL', 0],
        ['PENNY', 0]
    ]; 
    let changeMoney = parseFloat((userMoney - price).toFixed(2));
    let cashierMoney = parseFloat(cid.reduce((sum, item) => sum + item[1], 0).toFixed(2));

    console.log(changeMoney);
    console.log(cashierMoney);

    if (cashierMoney < changeMoney) {
        printResultScreen(change, 0);
        return;
    }

    if(userMoney == price){
        printResultScreen(change, 4);
        return;
    }

    while (changeMoney > 0) {
        if (changeMoney >= 100 && cid[8][1] >= 100) {
            change[0][1] = parseFloat((change[0][1] + 100).toFixed(2));
            cid[8][1] = parseFloat((cid[8][1] - 100).toFixed(2));
            changeMoney = parseFloat((changeMoney - 100).toFixed(2));
        } else if (changeMoney >= 20 && cid[7][1] >= 20) {
            change[1][1] = parseFloat((change[1][1] + 20).toFixed(2));
            cid[7][1] = parseFloat((cid[7][1] - 20).toFixed(2));
            changeMoney = parseFloat((changeMoney - 20).toFixed(2));
        } else if (changeMoney >= 10 && cid[6][1] >= 10) {
            change[2][1] = parseFloat((change[2][1] + 10).toFixed(2));
            cid[6][1] = parseFloat((cid[6][1] - 10).toFixed(2));
            changeMoney = parseFloat((changeMoney - 10).toFixed(2));
        } else if (changeMoney >= 5 && cid[5][1] >= 5) {
            change[3][1] = parseFloat((change[3][1] + 5).toFixed(2));
            cid[5][1] = parseFloat((cid[5][1] - 5).toFixed(2));
            changeMoney = parseFloat((changeMoney - 5).toFixed(2));
        } else if (changeMoney >= 1 && cid[4][1] >= 1) {
            change[4][1] = parseFloat((change[4][1] + 1).toFixed(2));
            cid[4][1] = parseFloat((cid[4][1] - 1).toFixed(2));
            changeMoney = parseFloat((changeMoney - 1).toFixed(2));
        } else if (changeMoney >= 0.25 && cid[3][1] >= 0.25) {
            change[5][1] = parseFloat((change[5][1] + 0.25).toFixed(2));
            cid[3][1] = parseFloat((cid[3][1] - 0.25).toFixed(2));
            changeMoney = parseFloat((changeMoney - 0.25).toFixed(2));
        } else if (changeMoney >= 0.1 && cid[2][1] >= 0.1) {
            change[6][1] = parseFloat((change[6][1] + 0.1).toFixed(2));
            cid[2][1] = parseFloat((cid[2][1] - 0.1).toFixed(2));
            changeMoney = parseFloat((changeMoney - 0.1).toFixed(2));
        } else if (changeMoney >= 0.05 && cid[1][1] >= 0.05) {
            change[7][1] = parseFloat((change[7][1] + 0.05).toFixed(2));
            cid[1][1] = parseFloat((cid[1][1] - 0.05).toFixed(2));
            changeMoney = parseFloat((changeMoney - 0.05).toFixed(2));
        } else if (changeMoney >= 0.01 && cid[0][1] >= 0.01) {
            change[8][1] = parseFloat((change[8][1] + 0.01).toFixed(2));
            cid[0][1] = parseFloat((cid[0][1] - 0.01).toFixed(2));
            changeMoney = parseFloat((changeMoney - 0.01).toFixed(2));
        } else {
            printResultScreen(change, 0);
            return;
        }
    }

    if (changeMoney === 0) {
        let remainingMoney = cid.reduce((sum, item) => sum + item[1], 0);
        if (remainingMoney === 0) {
            printResultScreen(change, 1);
        } else {
            printResultScreen(change, 2);
        }
    } else {
        printResultScreen(change, 0);
    }

    return;
});

//Function to print the result screen
function printResultScreen(change, type){
    const resultScreen = document.querySelector("#change-due");
    let result = change.filter(item => item[1] > 0);

    const status = document.createElement("h3");
    if(type === 0) {
        status.textContent = "Status: INSUFFICIENT_FUNDS";
        resultScreen.appendChild(status);   
        printCashier(cid);
        return;
    }
    if(type === 1) {
        status.textContent = "Status: CLOSED";
        resultScreen.appendChild(status);
    }
    if(type === 2) {
        status.textContent = "Status: OPEN";
        resultScreen.appendChild(status);
    }
    if(type === 4) {
        status.textContent = "No change due - customer paid with exact cash";
        resultScreen.appendChild(status);
        printCashier(cid);
        return;
    }
    
    result.forEach((item => {
        const resultContainer = document.createElement("div");
        resultContainer.classList.add("result-container");

        const resultType = document.createElement("p");
        resultType.textContent = item[0] + ": $" + item[1].toFixed(2);

        resultContainer.appendChild(resultType);
        resultScreen.appendChild(resultContainer);
    }));
    printCashier(cid);
    return;
}
