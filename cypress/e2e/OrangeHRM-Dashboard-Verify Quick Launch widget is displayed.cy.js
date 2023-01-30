describe('Test Quick Launch widget is displayed', () => {
  it('Should validate Quick Launch widget is displayed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //verify the Login title in the page
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').contains('Login')

    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')

    //Verify the Quick Launch widget is displayed
    cy.get('[class="oxd-text oxd-text--p"]').should('be.visible')
  })
})