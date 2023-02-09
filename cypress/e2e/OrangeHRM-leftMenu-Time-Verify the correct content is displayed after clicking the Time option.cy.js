const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the Time option', () => {
  it('It should validate the correct content is displayed after clicking the Time option', () => {
    cy.visit(Cypress.env('baseUrls'))
  
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //click on the Time option of the left menu
    cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click()

    //verify title of the page
    cy.get('.oxd-topbar-header-breadcrumb-module').contains ('Time')
    
    //verify tabs of the page
    //Timesheets tab
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item')
    
    //Attendance List
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')

    //Reports
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')

    //Project Info
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item')
  })
})