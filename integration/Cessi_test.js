
//Papaparse
// import { readFileSync, writeFileSync } from "fs";
    // import { parse } from "papaparse";
    // var data = require('../../../hardiansyah/cypress/fixtures/test_data.csv');
    // try {
    // const csvFile = readFileSync("./fixtures/book1.csv", "utf8");
    // const csvResults = parse(csvFile, {
    //     header: true,
    //     complete: csvData => csvData.data
    // }).data;
    // writeFileSync(
    //     "./fixtures/testDataFromCSV.json",
    //     JSON.stringify(csvResults, null, 4),
    //     "utf-8"
    // );
    // } catch (e) {
    // throw Error(e);
    // }

var data = require('../fixtures/test_data.json')

describe('Visit fabelio website', function() {

    it('Checkout purchase on fabelio website', () => {
        //Step visit link fabelio
        cy.visit('https://qa.fabelio.com/')
        
        //Step for click search icon
        cy.get('.jss35 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        
        //Step for input text
        //change to "data.product2" for -Kursi Kantor Alpha- || "data.product" for -cessi-
        cy.get('.MuiInputBase-input').type(data.product2) 
        cy.wait(3600)

        //Step click item that has been search & verify text
        //change to "data.product2" for -Kursi Kantor Alpha- || "data.productname" for -cessi-
        cy.contains(data.product2).click({force: true})
        //change to "data.product2" for -Kursi Kantor Alpha- || "data.productname" for -cessi-
        cy.contains(data.product2)

        //Step to add cart
        cy.wait(3600)
        cy.get('#addToCart').contains("TAMBAH KE TROLI")
        cy.get('#addToCart > .MuiButton-label').click({force: true})

        //Step to check troli & verify product on troli
        cy.wait(3600)
        //change to "data.product2" for -Kursi Kantor Alpha- || "data.productname" for -cessi-
        cy.get('.css-yms14p > .MuiGrid-container').contains(data.product2)
        cy.get('.css-yms14p > .MuiGrid-container').contains('telah ditambahkan ke troli')
    })
})

// CSVToJson
// const CSVToJSON = require("../node_modules/csvtojson")
// const FileSystem = require('../node_modules/fs')

// CSVToJSON().fromFile("./fixtures/test_data.csv").then(source => {
//     console.log(source);
//     source.push({
//         "produk": "cessi"
//     })