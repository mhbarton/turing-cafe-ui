describe('Turing Cafe Reservations page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to view the app page and see individual reservations', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'allReservations'}).as('reservations')
    .get(`.app-title`).contains('Turing Cafe Reservations')
    .get(`.reservations-container > :nth-child(2)`).contains('Christie')
    .get(`.reservations-container > :nth-child(2)`).contains(`12/29`)
    .get(`.reservations-container > :nth-child(2)`).contains(`7:00 pm`)
    .get(`.reservations-container > :nth-child(2)`).contains(`2`)
 
  })

  it('Should be able to visit the page and let the user input information into the form', () => {
    cy.get('form')
      .get(`[placeholder="Name"]`)
      .get(`[placeholder="Date (mm/dd)"]`)
      .get(`[placeholder="Time"]`)
      .get(`[placeholder="Number of guests"]`)
  })
})