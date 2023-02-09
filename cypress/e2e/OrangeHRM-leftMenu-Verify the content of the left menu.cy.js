const data = require('../fixtures/data.json');
describe('Test the content of the left menu', () => {
  it('It should validate the content of the left menu', () => {
    cy.visit(Cypress.env('baseUrls'))
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //Verify orangeHRM image on the menu
    cy.get('.oxd-brand-banner > img').should ('be.visible')

    //verify each option of the menu
    //search
    cy.get('.oxd-input').should('be.visible')
    //Admin
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //PIM
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Leave
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Time
    cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').should('be.visible')
   //Recruitment
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //My Info
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Performance
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Dashboard
    cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Directiory
    cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    //Buzz
    cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    
    cy.get('.oxd-input').type('test')
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('not.exist')
    })
})