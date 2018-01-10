"use strict";

function main() {
    var nameComp = "River Falls Homes Construction Company";
    console.log(nameComp);
    var rls = require('readline-sync');
    var lotnum = rls.question("What is your lot number? ");
    console.log("Lot Number = " + lotnum);
    var bednum = rls.question("How many bedrooms? ");
    console.log("Number of bedrooms = " + bednum);
    var bathnum = rls.question("How many bathroooms? ");
    console.log("Number of bathrooms = " + bathnum);
    var carnum = rls.question("How many cars in the garage? ");
    console.log("Number of cars = " + carnum);
    var base = 50000.00;
    var bedcost = 17000.00 * bednum;
    var bathcost = 12500.00 * bathnum;
    var carcost = 6000.00 * carnum;
    var Totcost = bedcost + bathcost + carcost + base;
    console.log("TotalCost = " + Totcost);
}

main();