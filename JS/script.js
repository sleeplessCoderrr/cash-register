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

let change = [
    ['PENNIES', 0],
    ['NICKELS', 0],
    ['DIMES', 0],
    ['QUARTERS', 0],
    ['ONES', 0],
    ['FIVES', 0],
    ['TENS', 0],
    ['TWENTIES', 0],
    ['HUNDREDS', 0]
];

printCashier(cashier);

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
}

//Function when user input the money and calculate the change
document.querySelector("#purchase-btn").addEventListener("click", function(){
    const userMoney = parseInt(document.querySelector("#user-input").value);
    const priceMoney = 3.26;
    let changeMoney = userMoney - priceMoney;
    let cashierMoney = cashier.reduce((sum, item) => sum + item[1], 0);
    cashierMoney = cashierMoney - changeMoney;

    if(cashierMoney < 0){
        printResultScreen(0);
        return;
    } 

    while(changeMoney > 0){
        if(changeMoney > 100 && cashier[8][1] > 0){
            change[8][1] += 100;
            cashier[8][1] -= 100;
            changeMoney -= 100;
        }else if(changeMoney > 20 && cashier[7][1] > 0){
            change[7][1] += 20;
            cashier[7][1] -= 20;
            changeMoney -= 20;
        }
        else if(changeMoney > 10 && cashier[6][1] > 0){
            change[6][1] += 10;
            cashier[6][1] -= 10;
            changeMoney -= 10;
        }
        else if(changeMoney > 5 && cashier[5][1] > 0){
            change[5][1] += 5;
            cashier[5][1] -= 5;
            changeMoney -= 5;
        }
        else if(changeMoney > 1 && cashier[4][1] > 0){
            change[4][1] += 1;
            cashier[4][1] -= 1;
            changeMoney -= 1;
        }
        else if(changeMoney > 0.25 && cashier[3][1] > 0){
            change[3][1] += 0.25;
            cashier[3][1] -= 0.25;
            changeMoney -= 0.25;
        }
        else if(changeMoney > 0.1 && cashier[2][1] > 0){
            change[2][1] += 0.1;
            cashier[2][1] -= 0.1;
            changeMoney -= 0.1;
        }
        else if(changeMoney > 0.05 && cashier[1][1] > 0){
            change[1][1] += 0.05;
            cashier[1][1] -= 0.05;
            changeMoney -= 0.05;
        }
        else if(changeMoney > 0.01 && cashier[0][1] > 0){
            change[0][1] += 0.01;
            cashier[0][1] -= 0.01;
            changeMoney -= 0.01;
        }
        else{
            break;
        }
    }

    if(cashierMoney === 0){
        printResultScreen(1);
        return;
    } else if(cashierMoney > 0){
        printResultScreen(2);
        return;
    }
    return;
});


//Function to print the result screen
function printResultScreen(type){
    const resultScreen = document.querySelector("#result-screen");
    let result = cashier.filter(item => item[1] > 0);

    const status = document.createElement("p");
    if(type === 0) status.textContent = "Status: INSUFFICIENT_FUNDS";
    if(type === 1) status.textContent = "Status: CLOSED";
    if(type === 2) status.textContent = "Status: OPEN";
    resultScreen.appendChild(status);
    
    result.forEach((item => {
        const resultConatiner = document.createElement("div");
        resultConatiner.classList.add("result-container");

        const resultType = document.createElement("p");
        resultType.textContent = item[0];

        const resultAmount = document.createElement("p");
        resultAmount.textContent = item[1];

        resultConatiner.appendChild(resultType);
        resultConatiner.appendChild(resultAmount);
        resultScreen.appendChild(resultConatiner);
    }));
}
