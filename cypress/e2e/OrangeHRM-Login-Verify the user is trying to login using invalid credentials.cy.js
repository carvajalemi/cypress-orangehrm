describe('Test a user is trying to login using invalid credentials', () => {
  it('Should validate a user is trying to login using invalid credentials ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin2')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin1234')

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //verify the page contains the message
    cy.contains('Invalid credentials')
  })
})