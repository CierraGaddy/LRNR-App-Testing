LRNR-App Testing Guide 
Overview
This project uses Jest for unit and integration testing and Cypress for end-to-end (E2E) testing. These tests help ensure everything in the app works as expected.

 Testing Tools
Jest (Unit & Integration Testing)
Jest runs tests on small parts of the app, like components and functions.
It works with React Testing Library to check if UI elements render correctly.
Test files are inside src/tests/.
Cypress (End-to-End Testing)
Cypress tests how users interact with the app (e.g., clicking buttons, filling forms).
It runs tests in a real browser.
Cypress tests are inside cypress/e2e/.
