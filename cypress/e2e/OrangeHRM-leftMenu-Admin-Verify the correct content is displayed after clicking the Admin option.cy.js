const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the Admin option', () => {
  it('Should validate the correct content is displayed after clicking the Admin option', () => {
    cy.visit(Cypress.env('baseUrls'))
    
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //click on the Admin option of the left menu
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()

    //Verify Admin title in the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Admin').should('be.visible')
    
    //Verify the tab menu in the Admin page

    //User Management
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'User Management')
    //Job
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Job')
    //Organization
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Organization')
    //Qualification
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should('contain', 'Qualifications')
  })
})