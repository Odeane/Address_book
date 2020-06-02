describe('user can toggle visibility of the form', () => {

	before(() => {
		cy.visit('http://localhost:3001')
	})
	
	it('by clicking the "Add Contact" button', () => {
	cy.get('#new_contact_form').should('not.be.visible')
	cy.get('#add-contact').click()
	cy.get('#new_contact_form').should('be.visible')
	cy.get('#add-contact').click()
	cy.get('#new_contact_form').should('not.be.visible')
	})
})