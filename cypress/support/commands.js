// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
let LOCAL_STORAGE_MEMORY = {};       //Local storage - data with no expiration date that will persist after the browser window is closed.
import '@testing-library/cypress/add-commands';
Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(auth_token => {
        LOCAL_STORAGE_MEMORY[auth_token] = localStorage[auth_token];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(auth_token => {
        localStorage.setItem(auth_token, LOCAL_STORAGE_MEMORY[auth_token]); //setItem()	Add key and value to local storage
    });
});

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        addContext({ test }, `../cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`)
    }

    // FIXME: Add the video to the 'it' context instead of the whole describe
    addContext({ test },  `../cypress/videos/${Cypress.spec.name}.mp4`);
});