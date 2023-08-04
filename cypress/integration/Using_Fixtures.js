/// <reference types="cypress"/>

it('Login and Logout',()=> {

    cy.fixture('example').then(function (data){
        this.data = data
        cy.visit("/")

        cy.login(this.data.email, this.data.password)

        cy.wait(2000)

        cy.contains('Incorrect email address or password').should('not.exist')
        cy.url().should('eq','http://localhost:4200/company/view/all')
        cy.wait(2000)

        //cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click()

        cy.get('.p-0 > .mat-menu-trigger').click()

        cy.get('#mat-option-2 > .mat-option-text').click()  //logout
        cy.wait(5000)
    })
})



it(' It should not login because pw is wrong',{browser: 'chrome'}, () => {
    
    cy.visit("/")
    cy.get('#Email').type('saad_sufyan@ymail.com')
    cy.get('#Password').type('Saad@1234')
    cy.get('form.ng-dirty > .mat-focus-indicator').click()
    cy.contains('Incorrect email address or password').should('exist')
    cy.url().should('eq','http://localhost:4200/accounts/login')





})