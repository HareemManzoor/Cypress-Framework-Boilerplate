describe('Table value extract and assertion', () => {

    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include', 'codenbox')
        cy.wait(3000)
    })

    //This method will work when there is no 'th' element under 'tr'
    it.skip('Get the whole table data', () => {
        cy.get('table[name="courses"] >tbody >tr').each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                (
                    cy.get('td').each(($cellData, index, $columns) => {
                        cy.log($cellData.text())
                    })
                )
            })
        })
    })

    it('Get row count', () => {
        cy.get('table[name="courses"] >tbody >tr').should('have.length', '12')
    })

    it('Getting column count in single row', () => {
        cy.get('table[name="courses"] >tbody >tr:eq(4) >td').should('have.length', '3')
    })

    it('Getting column data in single specific row method:1', () => {
        cy.get('table[name="courses"] >tbody >tr:eq(4) >td').each(($text) => {
            cy.log($text.text())
        })
    })

    //Alternative Method
    it('Getting all columns data in single specific row method:2', () => {
        cy.get('table[name="courses"] >tbody >tr').eq(4).within(() => { //return 4th row
            cy.get('td').each(($text) => {
                cy.log($text.text())
            })
        })
    })

    //Alternative Method when first 'tr' element doesn't contain the 'th'
    it.skip('Getting all columns data in single specific row method:3', () => {
        cy.get('table[name="courses"] >tbody >tr').each(($row) => {   //loop across each row
            cy.wrap($row).within(() => { 
                cy.get('td').each(($col) => {
                    cy.log($col.text())
                })
            })

        })
    })

    it('Verify the cell value anywhere in table method:1', () => {
        cy.get('table >tbody >tr').contains('td', 'Appium ').should('be.visible')
    })

    //Alternative Method
    it('Checking a specific cell value anywhere in the table method:2', () => {
        cy.get('table[name="courses"]').contains('td', 'Learn JMETER').should('be.visible')
    })

    it('Checking for a specific row and specific column in the static table method:1', () => {
        cy.get('table[name="courses"] > tbody > tr:nth-child(10) > td:nth-child(3)').contains('45').should('be.visible')
    })

    //Alternative Method
    it('Checking for a specific row and specific column in the static table method:2', () => {
        cy.get('table[name="courses"] > tbody > tr').eq(10).within(() => {
            cy.get('td').each(($el) => {
                if($el.text() == '50') {
                    cy.log('50 found')
                    cy.log($el.text())
                }
            })
        })
    })

    it('Get specific cell data in a specific row in a static table method:3', () => {
        cy.get('table[name="courses"] >tbody >tr').eq(1).within(() => {
            cy.get('td').eq(1).should('contain.text', 'Selenium Webdriver with Java Basics + Advanced + Interview Guide')
        })
    })

    //Alternative Method
    it('Check conditional value in a specific row and specific column in table by iterating row method:1', () => {
        cy.get('table[name="courses"] >tbody >tr >td:nth-child(2)').each(($el, index, $list) => { //index is used to make sure both are in same rows
            var text = $el.text()
            if (text.includes('WebServices')) {
                cy.get('table >tbody >tr >td:nth-child(3)').eq(index).then((price) => {
                    var actualPrice = price.text()
                    expect(actualPrice.trim()).to.be.eq('30') //to remove space we used trim
                })
            }
        })
    })

    it('Get single cell value on the based on other cell value method:2 ', () => {
        cy.get('table[name="courses"] >tbody >tr >td:nth-child(3)').each(($e1, index, $list) => {
            var price = $e1.text()
            if (price.includes('20')) {
                cy.get('table[name="courses"] >tbody >tr >td:nth-child(2)').eq(index).then((course) => {
                    var courseName = course.text()
                    expect(courseName).to.be.eq('Appium (Selenium) – Mobile Automation Testing from Scratch')
                })
            }
        })
    })

    it('Get single cell value on the based on other cell value method:3', () => {
        cy.get('table[name="courses"]').contains('Total').parent().within(() => {
            cy.get('td').eq(2).then((sum) => {
                cy.log(sum.text())
            })
        })
    })

    it('Fetching table header', () => {
        cy.get('table[name="courses"] >tbody >tr >th').each(($text) => {
            cy.log($text.text())
        })
    })
})
