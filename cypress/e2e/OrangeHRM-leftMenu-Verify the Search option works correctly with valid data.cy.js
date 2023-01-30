describe('Test that the Search option works correctly with valid data', () => {
  it('Should validate that the Search option works correctly with valid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')

    //get Search section and search Admin menu
    cy.get('[placeholder="Search"]').type('Admin')

    //Verify Admin menu is displayed
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').should('exist')
  })
})