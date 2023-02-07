const data = require('../fixtures/data.json');
describe('Test that My Timesheet link is opened and displays the correct content', () => {
  it('should validate that My Timesheet link is opened and displays the correct content', () => {
    cy.visit(data.config.baseUrl)
    
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')
    
    //get My Timesheet option and click over it
    cy.get(':nth-child(6) > .oxd-icon-button > .oxd-icon').click()   
   
    //verify the content of the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').contains('Time').should('be.visible')
    
  })
})