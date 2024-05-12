

//create a java script code block to calculate percentage and division based on percentage
// you have a variable storing marks obtained
// the valus should be less than 500 and greatee than or equal to 0
//calcukate percentage if total score is 500
//calculate grade based on the percentage
// for division consider 
// if grade > 90 = A
//if grade > 80 = B
//if grade >70 = C
//<70 fail



//calculate utility bill for electricity
//assume a household consumes 350 units of electricity in a month
//calculate total bill to be paid 
//conside the following
//total unit consume is less than 20 , a lumsum amount of npr 80 has to be paid
//for next 20 units, the rate is npr 5 per unit
// for next 30 units, the rate is npt 7.5 per unit
//for next 50 units, the rate is npr 10 per unit
//for next 100 units, the rate is npr 15 per unit
//rest rate 20 per unit


// Calculate utility bill for electricity
// Assume a household consumes 350 units of electricity in a month
// Calculate total bill to be paid
// Consider the following
// Total unit consume is less than 20, a lumpsum amount of NPR 80 has to be paid
// For next 20 units, the rate is NPR 5 per unit
// For next 30 units, the rate is NPR 7.5 per unit
// For next 50 units, the rate is NPR 10 per unit
// For next 100 units, the rate is NPR 15 per unit
// Rest rate is NPR 20 per unit

let household_unit = 350;

if (household_unit <= 20) {
    console.log(80);
} else if (household_unit <= 40) {
    console.log(80 + (household_unit - 20) * 5);
} else if (household_unit <= 70) {
    console.log(80 + 20 * 5 + (household_unit - 40) * 7.5);
} else if (household_unit <= 120) {
    console.log(80 + 20 * 5 + 30 * 7.5 + (household_unit - 70) * 10);
} else if (household_unit <= 220) {
    console.log(80 + 20 * 5 + 30 * 7.5 + 50 * 10 + (household_unit - 120) * 15);
} else {
    console.log(80 + 20 * 5 + 30 * 7.5 + 50 * 10 + 100 * 15 + (household_unit - 220) * 20);
}



//calculate tax to be paid monthly and yearly without net income
//consdier a software developer earns yearly npr 5000000
//the tax bracket for is as follow
//for the first npr 50000, 1%
//for next npr 200000 =>15 %
//for next npr 300000=> 20%
//for next npt 1000000=>25%
//for next npr 2000000=>30
//for rest =>40