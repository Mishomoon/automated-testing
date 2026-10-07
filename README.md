# Introduction to Automated Testing

This project is a simple Node.js application tested with Jest.

## Project Description

The application contains a `divide()` function.

The function:

- Divides two numbers
- Checks that both arguments are numbers
- Rejects `NaN`
- Rejects division by zero
- Returns the result when the input is valid

## Project Structure


automated-testing/
│
├── src/
│   ├── calculator.js
│   └── index.js
│
├── __tests__/
│   └── calculator.test.js
│
├── Screenshots/
│   └── Pass-all-test.png
│
├── Automated Testing.pdf
├── README.md
├── .gitignore
├── jest.config.js
├── package.json
└── package-lock.json

Main Files
src/calculator.js
Contains the divide() function and input validation.
src/index.js
Runs the application and checks that the divide() function works.
__tests__/calculator.test.js
Contains the automated tests for the divide() function.
jest.config.js
Contains the Jest configuration used to run the tests.
package.json
Contains the project information, scripts, and Jest dependency.
package-lock.json
Stores the installed package versions and dependency information.
Screenshots/Pass-all-test.png
Contains the screenshot of the successful test execution.
Automated Testing.pdf
Contains the documentation of the project and the steps used to create and test it.
Automated Tests
The project contains 5 automated tests:
- 1 positive test
- 4 negative tests
The positive test checks that two valid numbers are divided correctly.
The negative tests check:
1. A non-number first argument
2. A non-number second argument
3. NaN as an argument
4. Division by zero
Running the Tests
Install the project dependencies and run:
npm test

The final test result was:
Test Suites: 1 passed, 1 total
Tests: 5 passed, 5 total

All five tests passed successfully.
GitHub
The project is available at:
https://github.com/Mishomoon/automated-testing
