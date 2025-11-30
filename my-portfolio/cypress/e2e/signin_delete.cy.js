describe('Part 4: Sign In, Delete Project, Sign Out', () => {
  it('logs in, creates a temp project, deletes it, and logs out', () => {
    // 1. Login
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('test@student.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    // 2. Create a specific project JUST to delete it (Self-contained test)
    cy.visit('http://localhost:3000/project/add');
    cy.get('input[name="title"]').type('Project To Delete');
    cy.get('textarea[name="description"]').type('This will be deleted immediately.');
    cy.get('button[type="submit"]').click();

    // 3. Verify it exists first (Wait for backend)
    cy.contains('Project To Delete', { timeout: 30000 }).should('be.visible');

    // 4. Click Delete on THAT specific project
    cy.contains('Project To Delete').parent().find('button').contains('Delete').click();
    
    // 5. Handle the "Are you sure?" popup
    cy.on('window:confirm', () => true);

    // 6. Verify it is gone (Wait for backend)
    cy.contains('Project To Delete', { timeout: 30000 }).should('not.exist');

    // 7. Sign Out
    cy.contains('Sign Out').click();
  });
});