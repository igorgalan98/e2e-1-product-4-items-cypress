// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { faker } from '@faker-js/faker';



Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {

    cy.get('#tbay-main-content').should('be.visible').wait(1000)
        .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '4 × “Bruno Compete Hoodie” foram adicionados no seu carrinho.')
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type(faker.name.firstName())
    cy.get('#billing_last_name').type(faker.name.lastName())
    cy.get('#billing_company').type(faker.company.companyName())
    cy.get('#select2-billing_country-container').click().type('Brasil' + '{Enter}')
    cy.get('#billing_address_1').type(faker.address.streetAddress())
    cy.get('#billing_address_2').type(faker.address.street())
    cy.get('#billing_city').type(faker.address.city())
    cy.get('#select2-billing_state-container').click().type('São Paulo' + '{Enter}')
    cy.get('#billing_postcode').type('01153000')
    cy.get('#billing_phone').type('1111444333')
    cy.get('#billing_email').type(faker.internet.email())
    cy.get('.woocommerce-account-fields > .form-row-wide').click()
    cy.get('#order_comments').type(faker.lorem.text())
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.page-title').should('contain', 'Pedido')
    cy.get('.woocommerce-order > :nth-child(3)').should('contain', 'Pagar em dinheiro na entrega.')

})

