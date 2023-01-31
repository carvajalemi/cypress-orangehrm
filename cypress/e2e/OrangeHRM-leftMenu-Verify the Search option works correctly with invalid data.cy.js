const data = require('../fixtures/data.json');
describe('Test the Search option works correctly with invalid data', () => {
  it('It should validate the Search option works correctly with invalid data', () => {
    cy.visit(data.config.baseUrl)
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //Search an option that doesn't exit 
    cy.get('.oxd-input').type('test')

    //After searching any option that doesn't exist any specific option shouldn't exist in the menu
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('not.exist')
    })
})