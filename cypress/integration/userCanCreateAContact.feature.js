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
        cy.get('#submit').click()
    })

    it('display the name of a new contact', () => {
        cy.get('#contact_list').should('contain', 'odeane')
    })

    it('display the number of the contact', ()=>{
        cy.get('#contact_list').should('contain', '0700 101010')
    })

})
