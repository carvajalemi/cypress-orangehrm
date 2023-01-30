describe('Test that My Timesheet link is opened and displays the correct content', () => {
  it('should validate that My Timesheet link is opened and displays the correct content', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //Verify Dashboard title is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')
    cy.wait(5000)
    //get My Timesheet option and click over it
    cy.get(':nth-child(6) > .oxd-icon-button > .oxd-icon>g>.cls-1').click({force: true})   //This is not working when run from console 
   
    //verify the content of the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').contains('Time').should('be.visible')
    
  })
})