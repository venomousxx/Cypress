
    import { readFileSync, writeFileSync } from "fs";
    import { parse } from "papaparse";
    try {
    const csvFile = readFileSync("./fixtures/book1.csv", "utf8");
    const csvResults = parse(csvFile, {
        header: true,
        complete: csvData => csvData.data
    }).data;
    writeFileSync(
        "./fixtures/testDataFromCSV.json",
        JSON.stringify(csvResults, null, 4),
        "utf-8"
    );
    } catch (e) {
    //throw Error(e);
}

//var datax = require('../../../hardiansyah/cypress/fixtures/example.json')
//var datax = require('../../../hardiansyah/cypress/fixtures/test_data.csv')

describe('Visit fabelio website', function() {
    // it('Checkout purchase on fabelio website', () => {
    //     //Step visit link fabelio
    //     cy.visit('qa.fabelio.com')
        
    //     //Step for click search icon
    //     cy.get('.jss35 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        
    //     //Step for input text
    //     cy.get('.MuiInputBase-input')
    //         .type('Cessi')
    //     cy.wait(3600)

    //     //Step click item that has been search & verify text
    //     cy.get(':nth-child(6) > a > .jss30').click()
    //     cy.contains('Meja Makan Cessi-White')

    //     //Step to add cart
    //     cy.wait(3600)
    //     cy.get('#addToCart').contains("TAMBAH KE TROLI")
    //     cy.get('#addToCart > .MuiButton-label').click({force: true})

    //     //Step to check troli
    //     cy.wait(3600)
    //     cy.get('.css-yms14p > .MuiGrid-container > .MuiGrid-grid-xs-6').contains('Meja Makan Cessi-White')
    //     cy.get('.css-yms14p > .MuiGrid-container > .MuiGrid-grid-xs-6 > p').contains('telah ditambahkan ke troli')
    // })
    
    // before(function() {
    //     cy.fixtures('example').then(function(data){
    //         this.data = data
    //     })
    // })

    it('Check purchase', () => {
        
        //expect(datax.name).to.deep.equal('Using fixtures to represent data')
        cy.visit('qa.fabelio.com')
        cy.log(datax)
        cy.get('.jss42 > .MuiButtonBase-root').click()
        cy.get('.MuiContainer-root > .MuiButtonBase-root').click()
        //cy.get('input[name=username]').type(datax)
        //cy.get('input[name=password]').type(datax.produk)
    })
})