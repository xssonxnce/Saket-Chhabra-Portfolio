describe('Part 2: Sign In, Add Project, Sign Out', () => {
  it('logs in, adds a project, and logs out', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('test@student.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    
    cy.visit('http://localhost:3000/project/add');
    cy.get('input[name="title"]').type('Cypress Automated Project');
    cy.get('textarea[name="description"]').type('This project was created by Cypress.');
    cy.get('button[type="submit"]').click();
    
   // Wait up to 30 seconds for the backend to wake up and redirect
cy.contains('Cypress Automated Project', { timeout: 30000 }).should('be.visible');
    cy.contains('Sign Out').click(); // Adjust if your button says "Log Out"
  });
});