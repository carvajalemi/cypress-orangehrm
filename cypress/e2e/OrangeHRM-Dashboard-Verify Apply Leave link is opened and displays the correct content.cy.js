  const data = require('../fixtures/data.json');
  describe('Test that Apply Leave link is opened and displays the correct content', () => {
  it('should validate that Apply Leave link is opened and displays the correct content', () => {
    cy.visit(Cypress.env('baseUrls'))
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    
    //get Apply Leave option and click over it
    cy.get('.oxd-grid-3 > :nth-child(4) > .oxd-icon-button > .oxd-icon').click()   
    
    //verify the content of the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').contains('Leave').should('be.visible')
    })
})