# Dmoney_API_Testing_Postman

## Project Summary
This porject has automate DMoney user and transection api using postman

## Technology used:
- Postman
- Newman

## Pre requisites:
- Node JS

## Scenario
1. Admin creates an agent and random 2 customers. Admin email: admin@roadtocareer.net/ Pass: 1234
2. Deposit some money from SYSTEM account to the agent. System account: SYSTEM / Pass: 1234
   (range 10 tk to 10000 tk)
3. Agent deposit to any of 1 customer
4. Check agent balance
5. Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
6. Then the customer checks balance
7. Then send money to the other customer
8. Then from the another customer payment to this merchant: 01686606905
9. Then the second customer will check both balance and statement
10. Then the merchant will check his own balance

## How to run this project
- ``` git clone ```
- ``` npm i ```
- ``` npm test ```

A report will be generate in your project source root

## API Documentation
https://documenter.getpostman.com/view/25356274/2s93mAUfTn

## Test Cases
https://docs.google.com/spreadsheets/d/18JHO0U4rsErCzZfHx9-UvQiKBpHM0CrA/edit?usp=sharing&ouid=104367729177516886723&rtpof=true&sd=true

## Bug Report
https://docs.google.com/spreadsheets/d/1ilYmWDIRF4zajWbO_Pd1RMOs1yFnqnBM/edit?usp=sharing&ouid=104367729177516886723&rtpof=true&sd=true

## Newman Report
![Summary](https://github.com/fariha28345/Dmoney_API_Testing_Postman/assets/50767962/8ff4aabc-4e79-407b-918c-116ebff47ea1)
