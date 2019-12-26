/// <reference types="cypress"/>
import { Home } from "./pages/Home";

describe('test',() => {
 it('test1',() => {
    const home = new Home();
    home.navigate()
   //  const search = home.openSearch();
   //  const result = search.search('cypress');
   //  result.assertUrl('cypress');
 })
})