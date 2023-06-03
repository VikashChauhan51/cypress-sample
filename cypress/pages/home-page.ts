
export class HomePage {

    constructor() {

    }

    open() {
        cy.visit('/');
        return this;
    }


    verifyTitle() {
        cy.title().should('eq', 'Google');
        return this;

    }
    search(text: string) {
        cy.get('textarea[name=q]').type(`${text}{enter}`)
        return this;
    }
}