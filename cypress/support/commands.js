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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//randomnumber function

Cypress.Commands.add('randomNumber', (max, min) => {
    const r = Math.random()*(max-min) + min
    const num = Math.floor(r)
    // console.log(typeof 'floor_r')
    // let num = parseInt(floor_r)
    // console.log(typeof 'num')
    return cy.wrap(num)
    
})


//login function
Cypress.Commands.add('login', (email, password) => {
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('form.ng-dirty > .mat-focus-indicator').click()

})

//create random contact function
Cypress.Commands.add('add_contact',(email,fname,lname,phoneNumber) => {

    

    cy.get('#email').type(email)
    cy.get('#fName').type(fname)
    cy.get('#lName').type(lname)
    cy.get('#phoneNumber').type(phoneNumber)

    cy.wait(2000)

    cy.get('body').then(($body) => {

        if ($body.text().includes('This contact email is already exist')) {
          cy.get('#email').clear()
          cy.wait(2000)

          var new_num = Math.round(Math.random().toFixed(3)*100) 
          var email = 'unknown'+new_num+'@knocss.com'
          cy.get('#email').type(email)
          cy.get('.kdesign-btn-md-secondary').click()
          cy.wait(500)
          console.log(email)
        } 
        
        else {

          //cy.get('.alterCustomProperty').click()
          //cy.get('.kdesign-btn-md-primary').click()
          cy.get('.kdesign-btn-md-secondary').click()
          cy.wait(500)
        }
      })



})


Cypress.Commands.add('logout', () => {

    
    cy.get('.p-0 > .mat-menu-trigger').click({ waitForAnimations: false })
    
    cy.get('#mat-option-2 > .mat-option-text').click({ waitForAnimations: false })
})
