Cypress.Commands.add('login', (username, password) => {
    cy.log('A FAZER LOGIN POR COMMAND')
    cy.get('#username').clear().type(username);
    cy.get('#password').clear().type(password);
    cy.get('.fa').click()
})