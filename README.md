# Frontline Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Assumptions

1. That the challenge wasn't to convert the literal string "(id,created,employee(id,firstname,employeeType(id), lastname),location)", but that this is a format description for a string such as "(403, 2016-10-20, (1774, Alice, Software Manager(201), Zachary), Nashua, NH)", representing a record for an individual employee.

2. That each instance of "id" is a different ID number or string, specifically that the first "id" identifies the employee record, the second is an employee ID, and the third is an ID associated with the employee type.

3. That there is no text that matches the third item "employee" itself, that "employee" instead describes the parenthetical content that follows as a group.

4. That multiple example strings should be parsed and displayed.
