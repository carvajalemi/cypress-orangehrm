describe('Test a user is trying to login empty values', () => {
  it('Should validate a user is trying to login empty values', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //verify the Login title in the page
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').contains('Login')

    //get button login and click over it
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    //verify the page contains the message Required
    cy.contains('Required').should('be.visible')
  })
})