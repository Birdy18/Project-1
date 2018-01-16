
const BASE = 50000;
const BEDCOST = 17000;
const BATHCOST = 12500;
const CARCOST = 6000;


function main() {
    console.clear();
    var nameComp = "River Falls Homes Construction Company";
    console.log(nameComp);
    var rls = require('readline-sync');
    var lotnum = rls.question("What is your lot number? ");
    console.clear();
    var bednum = rls.question("How many bedrooms? ");
    console.clear();
    var bathnum = rls.question("How many bathroooms? ");
    console.clear();
    var carnum = rls.question("How many cars in the garage? ");
    console.clear();
    var total_bed_cost = BEDCOST * bednum;
    var total_bath_cost = BATHCOST * bathnum;
    var total_car_cost = CARCOST * carnum;
    var total_cost = BASE + total_bed_cost + total_bath_cost + total_car_cost;
    console.log("TotalCost = " + total_cost);
}

main();