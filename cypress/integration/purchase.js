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

        cy.get('.icon-ok')
            .parent()
            .should('contain.text', 'Product successfully added to your shopping cart');

        cy.get('span#layer_cart_product_title')
            .should('contain.text', productName);

        cy.get('.button-container a[href$="controller=order"]').click();

        cy.get('.cart_navigation a[href$="order&step=1"]').click();

        cy.get('#email').type('teste@react.com.br');
        cy.get('#passwd').type('test12345');
        cy.get('button#SubmitLogin').click();

        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked');
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same');

        cy.pause();

        cy.get('button[name=processAddress]').click();

        cy.get('[type=checkbox]#cgv').check();
        cy.get('button[name=processCarrier]').click();

        cy.get('.bankwire').click();

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click();

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.');

    });
});