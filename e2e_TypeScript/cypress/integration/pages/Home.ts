import { Search } from './Search';
export class Home {
    navigate() {
        cy.visit('https://sehatkahani-dev.ccwebdemo.com/auth/login');
        return this;
    }

    // openSearch() {
    //     return new Search();
    // }
}
