describe('Test Timessheets link is opened and displays the correct content', () => {
  it('It should validate that Timessheets link is opened and displays the correct content', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //get Timesheets option and click over it
    cy.get('.oxd-grid-3>:nth-child(3) > .oxd-icon-button > .oxd-icon').click()

    //verify the content of the page
    cy.get('.orangehrm-card-container > .oxd-text--h6').contains('Select Employee')
   
  })
})