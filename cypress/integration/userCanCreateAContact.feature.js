describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('odeane')
        cy.get('#email').type('odeane@yahoo.com')
        cy.get('#phone').type('0700 101010')
        cy.get('#company').type('craft Academy')
        cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('@croney')
    })
})
