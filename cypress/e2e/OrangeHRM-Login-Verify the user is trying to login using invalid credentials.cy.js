const data = require('../fixtures/data.json');
describe('Test a user is trying to login using invalid credentials', () => {
  it('Should validate a user is trying to login using invalid credentials ', () => {
    cy.visit(Cypress.env('baseUrls'))

    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[1].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[1].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //verify the page contains the message
    cy.contains('Invalid credentials')
  })
})