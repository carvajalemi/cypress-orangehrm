const data = require('../fixtures/data.json');
describe('Test that the Assign Leave link is opened and displays the correct content', () => {
  it('It should validate that the Assign Leave link is opened and displays the correct content', () => {
    cy.visit(data.config.baseUrl)
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //get Assign Leave option and click over it
    cy.get(':nth-child(1) > .oxd-icon-button > .oxd-icon>g>.cls-1').click()

    //verify the content of the page
    cy.get('.orangehrm-card-container > .oxd-text--h6').contains('Assign Leave')
   
  })
})