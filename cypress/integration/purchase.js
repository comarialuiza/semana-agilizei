/// <reference types="cypress" />

context('Purchase', () => {
    it('Buys a product', () => {
        cy.visit('/');

        const productName = 'Faded Short Sleeve T-shirts';

        cy.contains(productName)
            .trigger('mouseover')

        cy.contains(productName)
            .parent()
            .siblings('div.button-container')
            .children('a')
            .first()
            .click()
    });
});