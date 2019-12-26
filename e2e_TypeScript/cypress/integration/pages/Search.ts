import { Result } from "./Result";

export class Search {
    search(term: string) {
        const field = cy.get('[name="q"]');
        field.type(term);

        cy.get('.search-submit').click();
        return new Result();
    }
}