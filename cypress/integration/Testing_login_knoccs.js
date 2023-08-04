/// <reference types="cypress"/>

const { random } = require("lodash")
const dayjs = require('dayjs')


beforeEach(() => {

    cy.visit("/")

})





it.skip('Login to KNOCCS and made a unique contact then logout', { browser: 'chrome' }, () => {
    //LOGIN STEPS
    cy.login('ana@xoopah.com', 'Knoccs@123')
    cy.contains('Incorrect email address or password').should('not.exist')

    //cy.url().should('eq', 'https://knoccsapp-staging.azurewebsites.net/dashboard')
    cy.wait(2000)


    //Changed becuase of company route added
    cy.get(':nth-child(2) > .ng-star-inserted > .mat-focus-indicator').click({ multiple: true })
    //cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click({ multiple: true }) //For going to contact page
    cy.wait(2000)

    cy.get('.float-right > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
    //cy.get('.float-right > :nth-child(2) > .mat-focus-indicator').click()


    //creating random mails
    var i=0;
    for(i=0; i<1;i++){
        
    //var random_num = Math.round(Math.random().toFixed(3)*100)
    var random_num = Math.round(Math.random().toPrecision(3)*1000) // to generate a 3 digit random no
    var new_email = 'auto-created'+random_num+'@gmail.com'
    cy.add_contact(new_email, 'FName'+random_num, 'LName'+random_num, random_num+'-'+random_num+'-'+random_num)
    
    }

    //cy.get('.float-right > :nth-child(2) > .mat-focus-indicator').click()
    //cy.get('#email').type("tahazulq@gmail.com")
    //cy.get('#fName').type("Taha testing")
    //cy.get('#lName').type("Zulq")
    //cy.get('#phoneNumber').type("123-123-131")
    //y.get('.alterCustomProperty').click()
    //cy.get('.kdesign-btn-md-primary').click()

  

    cy.get('.kdesign-btn-link > .mat-button-wrapper').click()
    cy.logout()


})

it.skip(' It should not login because pw is wrong', { browser: 'chrome' }, () => {


    cy.get('#Email').type('v1test@gmail.com')
    cy.get('#Password').type('Saad@1234')
    cy.get('form.ng-dirty > .mat-focus-indicator').click()
    cy.contains('Incorrect email address or password').should('exist')
    cy.url().should('eq', 'https://knoccsapp-staging.azurewebsites.net/accounts/login')





})


it.skip(' For contact already exist', { browser: 'chrome' }, () => {

    //login
    cy.get('#Email').type('knoccsdemo@testing.com')
    cy.get('#Password').type('Saad@123')
    cy.get('form.ng-dirty > .mat-focus-indicator').click()


    cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click() //For going to contact page
    cy.get('.float-right > :nth-child(2) > .mat-focus-indicator').click()
    cy.get('#email').type("tahazulq@gmail.com")
    cy.get('#fName').type("Taha testing")
    cy.get('#lName').type("Zulq")
    cy.get('#phoneNumber').type("123-123-131")
    cy.wait(1000)

    cy.get('body').then(($body) => {
        // synchronously ask for the body's text
        // and do something based on whether it includes
        // another string
        if ($body.text().includes('This contact email is already exist')) {
          // yup found it
          cy.get('#email').clear()
          cy.wait(2000)
          
          var new_num = Math.round(Math.random().toFixed(3)*100) 
          var email = 'unknown'+new_num+'@knocss.com'
          cy.get('#email').type(email)
          console.log(email)
        } else {
          // nope not here
          var i = 1;
          console.log(i)
        }
      })



/* 
    if (cy.contains('This contact email is already exist').should('not.exist')) {
        
        var i = 1;
        
    }
    else if (cy.contains('This contact email is already exist').should('exist')) {
        
        cy.get('#email').clear()
        cy.wait(2000)
        cy.get('#email').type(email)
        var new_num = Math.round(Math.random().toFixed(3)*100) 
        var email = 'unknown'+new_num+'@knocss.com'
        console.log(email)
    }
 */
    // cy.get('.kdesign-btn-md-primary').click()



})


it.skip('testing contact', {browser:'chrome'} ,() =>{

        //LOGIN STEPS
    cy.login('saad_sufyan@ymail.com', 'Saad@123')
    cy.contains('Incorrect email address or password').should('not.exist')

    //cy.url().should('eq', 'https://knoccsapp-staging.azurewebsites.net/dashboard')
    cy.wait(2000)
    
    
    //for testing the random number change, it works like n-1, minimum number can be generated but not the 18.
    /*var i=0;
    for(i=0; i<100;i++){
        cy.randomNumber(14,18).then(num => console.log(num))
    } */


    //Changed becuase of company route added
    cy.get(':nth-child(1) > div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click()
    //cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click({ multiple: true }) //For going to contact page
    cy.wait(2000)

    cy.get('.float-right > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('#email').type("helloworld@gmail.com")
    cy.get('#fName').type("hello ")
    cy.get('#lName').type("world")
    cy.get('#phoneNumber').type("123-123-131")

    
    cy.get(':nth-child(6) > .kdesign-input-control-group').click() //selecting the gender custom dropdown

    //calling the random function to generate a random number and select the random option from the dropdonw
    cy.randomNumber(14,18).then(num => {
        cy.get('#mat-option-'+num+' > .mat-option-text').click()
        console.log(num)
    }) 
    cy.get(':nth-child(7) > .kdesign-input-control-group').click() //for selecting the country custom property

    cy.randomNumber(18,21).then(num => {
        cy.get('#mat-option-'+num+' > .mat-option-text').click()
        cy.get('body').click() // for closing dropdown
    })

    cy.get(':nth-child(8) > .kdesign-input-control-group').type('District Value')

    cy.get(':nth-child(9) > .kdesign-input-control-group').type('Asd Value')

    cy.get(':nth-child(10) > .kdesign-input-control-group').click() // for selecting the city dropdown
    cy.randomNumber(21,25).then(num => {
        cy.get('#mat-option-'+num+' > .mat-option-text').click()
    })

    cy.get(':nth-child(11) > .kdesign-input-control-group').type('Address Value')

    cy.get(':nth-child(12) > .kdesign-input-control-group').click() // for selecting the region dropdown
    cy.randomNumber(25,28).then(num => {
        cy.get('#mat-option-'+num+' > .mat-option-text').click()
    })






    
    //cy.get('.kdesign-btn-md-secondary').click()



})


it.only('Login to KNOCCS and Go to Conversation Log', { browser: 'chrome' }, () => {
    //LOGIN STEPS
    cy.login('ana@xoopah.com', 'Knoccs@123')
    cy.contains('Incorrect email address or password').should('not.exist')

    //cy.url().should('eq', 'https://knoccsapp-staging.azurewebsites.net/dashboard')
    cy.wait(2000)

    cy.get(':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.wait(5000)

    cy.get('.float-right > :nth-child(2) > span.mat-tooltip-trigger > .mat-focus-indicator').click()
    cy.wait(3000)
    cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
    cy.wait(1000)
    cy.get('#mat-input-2').click()
    cy.get('.mat-calendar-body-active > .mat-calendar-body-today').click();

    



})


