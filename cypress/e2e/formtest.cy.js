describe('Invalid input', () => {
  it('Fails to log in user', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-cy=loginbtn]').click();
    cy.get('input#loginEmail').type('invalid@credentials.no');
    cy.get('input#loginPassword').type('****');
    cy.get('[data-cy=submit]').click();
  });
});
