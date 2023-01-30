describe('Test that after clicking in the left arrow the menu is collapsed', () => {
  it('I should validate that after clicking in the left arrow the menu is collapsed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    //get input name and fill in the value
    cy.get('[name="username"]').type('Admin')
    
    //get input password and fill in the value
    cy.get('[name="password"]').type('admin123')

    //get button login and click over it
    cy.get ('[type="submit"]').click()

    //Verify h6 is displayed in the page
    cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    //get the arrow to collapse the menu
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()

    //verify that after collapsing the menu an option of the menu is not diplayed
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('is.not.visible')
  })
})