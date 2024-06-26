# Cash Register

## Overview

This project is a Cash Register app that calculates and returns change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer. The app also displays different messages to the user in various scenarios, such as when the customer provides too little cash or when the cash drawer doesn't have enough to issue the correct change.

## Objective

Build an app that is functionally similar to [this example](https://cash-register.freecodecamp.rocks).

## Currency Units

| Currency Unit       | Amount   |
|---------------------|----------|
| Penny               | $0.01    |
| Nickel              | $0.05    |
| Dime                | $0.10    |
| Quarter             | $0.25    |
| Dollar              | $1.00    |
| Five Dollars        | $5.00    |
| Ten Dollars         | $10.00   |
| Twenty Dollars      | $20.00   |
| One Hundred Dollars | $100.00  |

## Project Requirements

- **HTML**: Basic structure for input, buttons, and result display.
- **JavaScript**: Functionality to calculate and display the change, and handle different scenarios.
- **CSS**: Styling for the input, buttons, and result display.

## Example Usage

1. Enter `19.5` as the price and `20` as the cash provided, with `cid` as `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`.
2. Click the "Purchase" button. The result should display "Status: OPEN QUARTER: $0.5".
3. Enter `3.26` as the price and `100` as the cash provided, with `cid` as `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`.
4. Click the "Purchase" button. The result should display "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".

## Conclusion

This project demonstrates the use of JavaScript for handling arithmetic operations, conditional logic, and DOM manipulation to create a functional cash register. Enjoy coding and feel free to enhance the project with additional features and styles!
