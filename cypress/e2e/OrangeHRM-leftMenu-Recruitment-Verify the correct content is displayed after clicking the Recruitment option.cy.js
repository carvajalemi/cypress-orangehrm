const data = require('../fixtures/data.json');
describe('Test the correct content is displayed after clicking the Recruitment option', () => {
  it('Should validate the correct content is displayed after clicking the Recruitment option', () => {
    cy.visit(data.config.baseUrl)
    
    //get input name and fill in the value
    cy.get('[name="username"]').type(data.users[0].username)
    
    //get input password and fill in the value
    cy.get('[name="password"]').type(data.users[0].password)

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //click on the Recruitment option of the left menu
    cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()

    //Verify Recruitment title in the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Recruitment').should('be.visible')
    
    //Verify the tab menu in the Recruitment page

    //Candidates
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Candidates')

    //Vacancies
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should('contain', 'Vacancies')
  })
})