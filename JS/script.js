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
    let cashierMoney = cashier.reduce((sum, item) => sum + item[1], 0);
    const changeMoney = userMoney - priceMoney;

    if (isNaN(userMoney) || userMoney < priceMoney) {
        alert("Insufficient funds. Please enter enough money.");
        return;
    }
    alert("Your change is: $" + changeMoney.toFixed(2));
});


//Function to print the result screen
function printResultScreen(changeMoney, type){
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
