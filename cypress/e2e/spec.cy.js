describe('Turing Cafe Reservations page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to view the app page and see individual reservations', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations')
    .get(`.app-title`).contains('Turing Cafe Reservations')
  })

})