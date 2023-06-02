/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve incluir contato', () => {
    cy.get('input[type="text"]').type('Usuário 1')
    cy.get('input[type="email"]').type('teste@gmail.com')
    cy.get('input[type="tel"]').type('9 9999 9999')
    cy.get('button[type="submit"]').click()
    cy.get('.contato').last().should('contain', 'Usuário 1')

    });

    it('Deve editar contato', () => {
      cy.get('.edit').first().click()
      cy.get('input[type="text"]').clear().type('Teste')
      cy.get('.alterar').click()
      cy.get('.contato').first().should('contain', 'Teste')

    })
  
    it('Deve excluir contato', () => {
      cy.get('.delete').first().click()
      cy.get('.contato').first().should('not.contain', 'Teste')
    })
  
  })
