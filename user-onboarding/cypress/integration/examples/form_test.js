describe("This is the first test", () => {
    it("should return true", () => {
        expect(true).to.equal(true);
    });
});

describe("Testing form inputs", () => {
    beforeEach(function() {
        cy.visit("http://localhost:3000/")
    });

    it("Testing input fields", () => {
        cy.get('input[name="username"]')
            .type('SeanShadle')
            .should('have.value', 'SeanShadle')

        cy.get('input[name="email"]')
            .type('Test@test.com')
            .should('have.value', 'Test@test.com')

        cy.get('input[name="password"]')
            .type('testpassword')
            .should('have.value', 'testpassword')

        cy.get('select[name="role"]').select('Front-end Dev')
        cy.get('select[name="role"]').select('Back-end Dev')
        cy.get('select[name="role"]').select('Designer')
        cy.get('select[name="role"]').select('Project Manager')
        cy.get('select[name="role"]').select('Scrum Master')

        cy.get('input[name="terms"]').check()

        cy.get('form').submit()
    })

    it("Testing form validation", () => {
        cy.get('input[name="username"]')
        .type('SeanShadle')
        .should('have.value', 'SeanShadle')
        .clear();
    cy.contains("Username is required")

    cy.get('input[name="email"]')
        .type('Test@test.com')
        .should('have.value', 'Test@test.com')
        .clear();
    cy.contains("Email is required")

    cy.get('input[name="password"]')
        .type('testpassword')
        .should('have.value', 'testpassword')
        .clear();
    cy.contains("Password is required")     
    
        cy.get('select[name="role"]').select('Front-end Dev')
        cy.get('select[name="role"]').select('')
    cy.contains("Role is required")

        cy.get('input[name="terms"]').check().uncheck()
    cy.contains("Please agree to the terms of use")
    })
});