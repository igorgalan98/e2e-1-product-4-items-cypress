/// <reference types="cypress" />

import EnderecoPage from '../support/page_objects/nome-funcionliada.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
        

    it('Caminho feliz - Realizar compra e preencher campos obrigatórios', () => {
        cy.visit('/produtos/page/9')
        cy.addProdutos('Bruno Compete Hoodie', 'XL', 'Blue', 4)

        EnderecoPage.editarEnderecoFaturamento()
    });

    })