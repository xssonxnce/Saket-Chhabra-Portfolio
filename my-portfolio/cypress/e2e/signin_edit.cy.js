describe('Part 3: Sign In, Edit Project, Sign Out', () => {
  it('logs in, creates a temp project, edits it, and logs out', () => {
    // 1. Login
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('test@student.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    // 2. Create a specific project JUST to edit it
    cy.visit('http://localhost:3000/project/add');
    cy.get('input[name="title"]').type('Project To Edit');
    cy.get('textarea[name="description"]').type('This will be edited.');
    cy.get('button[type="submit"]').click();

    // 3. Verify it exists first (Wait for backend)
    cy.contains('Project To Edit', { timeout: 30000 }).should('be.visible');

    // 4. Click Edit on THAT specific project
    cy.contains('Project To Edit').parent().find('a').contains('Edit').click();

    // 5. Change the title
    cy.get('input[name="title"]').clear().type('Project EDITED Success');
    cy.get('button[type="submit"]').click();

    // 6. Verify the NEW title appears (Wait for backend)
    cy.contains('Project EDITED Success', { timeout: 30000 }).should('be.visible');

    // 7. Sign Out
    cy.contains('Sign Out').click();
  });
});