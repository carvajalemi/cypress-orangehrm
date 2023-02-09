const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the Performance option', () => {
  it('Should validate the correct content is displayed after clicking the Performance option', () => {
    cy.visit(Cypress.env('baseUrls'))
    
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //click on the Performance option of the left menu
    cy.get('[href="/web/index.php/performance/viewPerformanceModule"]').click()

    //Verify Performance title in the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Performance').should('be.visible')
    
    //Verify the tab menu in the Performance page

    //Configure
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').should('contain', 'Configure')

    //Manage Reviews
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Manage Reviews')

    //My Trackers
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').should('contain', 'My Trackers')

    //Employee Trackers
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee Trackers')
  })
})