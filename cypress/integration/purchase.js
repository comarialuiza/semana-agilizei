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

        cy.get('.button-container a[href$="controller=order"]').click();

        cy.get('.cart_navigation a[href$="order&step=1"]').click();

        cy.get('#email').type('teste@react.com.br');
        cy.get('#passwd').type('test12345');
        cy.get('button#SubmitLogin').click();

        // cy.get('#addressesAreEqual')

        cy.get('button[name=processAddress]').click();

        cy.get('[type=checkbox]#cgv').check();
        cy.get('button[name=processCarrier]').click();
    });
});