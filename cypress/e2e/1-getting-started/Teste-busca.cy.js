describe("busca cursos" , () => {
beforeEach(() => {
    cy.visit("https://www.alura.com.br")
})

it ("buscar curso de java" , () => {
    cy.get('#header-barraBusca-form-campoBusca').type("python");
    cy.get('.header-barraBusca-form-submit').click();
})
})