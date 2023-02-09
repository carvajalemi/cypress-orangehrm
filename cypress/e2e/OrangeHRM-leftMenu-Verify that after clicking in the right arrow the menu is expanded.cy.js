const data = require('../fixtures/data.json');
describe('Test that after clicking in the right arrow the menu is expanded', () => {
  it('I should validate that after clicking in the right arrow the menu is expanded', () => {
    cy.visit(Cypress.env('baseUrls'))
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //get the arrow to collapse the menu
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()

    //get the arrow to expanded the menu
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()

    //verify that after expanding the menu the option of the menu are diplayed
    cy.get(':nth-child(1) > .oxd-main-menu-item ').should('be.visible')
  })
})