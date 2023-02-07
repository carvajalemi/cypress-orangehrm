const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the My Info option', () => {
  it('It should validate correct content is displayed after clicking the My Info option', () => {
    cy.visit(data.config.baseUrl)
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //click on My Info option of the left menu
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()

   //verify title of the page
   cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').contains('Personal Details')
  })
})