
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
    if(isNaN(lotnum)) {
        console.log("Invalid input!");
        return;
    }
    console.clear();
    var bednum = rls.question("How many bedrooms? ");
    if(isNaN(bednum)) {
        console.log("Not a number, genius!!");
        return;
    }
    console.clear();
    var bathnum = rls.question("How many bathroooms? ");
    if(isNaN(bathnum)) {
        console.log("Not a number, genius!!");
        return;
    }
    console.clear();
    var carnum = rls.question("How many cars in the garage? ");
    if(isNaN(carnum)) {
        console.log("Not a number, genius!!");
        return;
    }


    console.clear();
    var total_bed_cost = BEDCOST * bednum;
    var total_bath_cost = BATHCOST * bathnum;
    var total_car_cost = CARCOST * carnum;
    var total_cost = BASE + total_bed_cost + total_bath_cost + total_car_cost;
    console.log("TotalCost = " + total_cost);
}

main();