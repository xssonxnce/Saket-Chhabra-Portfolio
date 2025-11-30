describe('Part 1: Sign Up', () => {
  it('allows a visitor to sign up', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[name="firstName"]').type('Saket');
    cy.get('input[name="lastName"]').type('Student');
    cy.get('input[name="email"]').type('test@student.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Registration Successful');
    });
  });
});