describe('Test that Leave list link is opened and displays the correct content', () => {
  it('should validate that Leave list link is opened and displays the correct content', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')

    //get Leave list option and click over it
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-icon-button > .oxd-icon').click() 

    //Verify Leave List section is displayed in the Leave page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').contains('Leave').should('be.visible')
  })
})