describe('Test the correct content is displayed after clicking the PIM option', () => {
  it('It should validate the correct content is displayed after clicking the PIM option', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //click on the PIM option of the left menu
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()

    //verify title of the page
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('PIM')
   
    //verify tabs of the page
    //Configuration tab
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item')
    
    //Employee List
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item')

    //Add Employee
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')

    //Reports
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item')
  })
})