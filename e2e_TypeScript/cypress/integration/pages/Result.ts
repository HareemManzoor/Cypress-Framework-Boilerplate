export class Result {
    count() {
        return 6;
    }

    assertUrl(term: string) {
        const query = `?s=${term}`;
        cy.url().should('include', query)
    }
}