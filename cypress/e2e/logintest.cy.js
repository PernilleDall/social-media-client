describe('Login and Logout Test', () => {
  it('Logs in the user and logs them out', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-cy=loginbtn]').click();
    cy.get('input#loginEmail').type('pernille@noroff.no');
    cy.get('input#loginPassword').type('password123');
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=logoutbtn]').click();
  });
});
