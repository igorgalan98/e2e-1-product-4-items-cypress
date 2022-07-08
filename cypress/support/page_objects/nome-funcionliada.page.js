import  { faker } from '@faker-js/faker'
class EnderecoPage {

    editarEnderecoFaturamento() {
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
    }

}

export default new EnderecoPage()