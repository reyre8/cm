# Campaign Monitor Technical Test
###*Author: Reynaldo Rojas*

### Requirements

This application requires node (preferably v11.10.0) and npm (preferably v6.7.0) in order to be installed.

### Folder Structure
The content of the folder looks like:
```
campaign-monitor/
├── .eslintrc
├── .prettierrc
├── README.md
├── code
│   ├── exception.js
│   ├── question-1.js
│   ├── question-2.js
│   ├── question-3.js
│   ├── question-4.js
│   └── util.js
├── database
│   └── SQL.txt
├── package-lock.json
├── package.json
└── tests
    ├── question-1.test.js
    ├── question-2.test.js
    ├── question-3.test.js
    ├── question-4.test.js
    └── util.test.js
```
Where, the folder `/code` contains the implementation of questions 1, 2, 3, 4, and some utilities and errors used during the resolution of the questions.

The folder `/tests` contains all the unit tests regarding the questions and utilities used in the resolution of the technical test. The library used as unit test framework is https://jestjs.io/

The folder `/database` contains the file `SQL.txt` (as required), which has got the resolution of questions 5 and 6.

### Installation

After downloading the folder, access the root of it via the command console, and run the following command:

`$ npm install`

>Note:
If the application presents any issues related to eslint, simply execute `npm run lint-fix` in order to fix the issues.

### Testing questions 1 - 4

As mentioned above, each question is implemented in a specific file contained in the folder `/code` (i.e. the implementation of **question 1** exists in `/code/question-1.js`).

Each question, has got its own unit tests file, which is located in the folder `/tests`(i.e. the tests for **question 1** exists in `tests/question-1.test.js`).

In order to execute the tests, simply run in the command line:

`$ npm run test`

The last, should give you a description of each question run, with its own set of tests, and the outcome of each one of them.

### Testing questions 5 - 6

The **DBMS** used for these questions is PostgreSQL v 10.  The file `/database/SQL.txt` contains the sql required to create the tables Salesperson, Customer, Orders, and the resolution of each question.


### Assumptions

#### Question 1
- The arameter to the function should be provided/defined, otherwise function will throw an Error.
- Strings made of spaces (i.e. “    ”) are also considered empty.

#### Question 2
- The arameter to the function should be provided/defined, otherwise function will throw an Error.
- Zero (0) is not consider a positive integer (or a natural number).

#### Question 3
- Only natural numbers are accepted by the function.

#### Question 4
- Only an array (empty), or an array of natural numbers is accepted.
- The resulting array is being ordered before is returned.

#### Question 5
- The DBMS used is Postgres 10.
- CustomerID in table BigOrders was made PRIMARY KEY.
