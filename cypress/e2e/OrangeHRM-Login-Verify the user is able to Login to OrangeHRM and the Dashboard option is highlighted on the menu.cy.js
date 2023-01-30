describe('Test a user is able to Login to OrangeHRM and the Dashboard option is highlighted on the menu', () => {
  it('Should validate a user is able to Login to OrangeHRM and the Dashboard option is highlighted on the menu', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
  })
})