const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the Maintenance option', () => {
  it('Should validate the correct content is displayed after clicking the Maintenance option', () => {
    cy.visit(data.config.baseUrl)
    
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //click on the Maintenance option of the left menu
    cy.get('[href="/web/index.php/maintenance/viewMaintenanceModule"]').click()

    //Verify url of Maintenance is displayed
    cy.url().should('include', '/maintenance/purgeEmployee')
    
    //Verify Administrator Access title in the pop up
    cy.get('.oxd-text--h6').contains('Administrator Access').should('be.visible')

   })
})