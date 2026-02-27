let gross_income= 20000
if (gross_income<5999){
    console.log("Your monthly contribution is Ksh 150")
}
else if (gross_income>5999 && gross_income<8000){
    console.log("Your monthly contribution is Ksh 300")
}
else if (gross_income>7999 && gross_income<12000){
    console.log("Your monthly contribution is Ksh 400")
}
else if (gross_income>11999 && gross_income<15000){
    console.log("Your mkonthly contribution is Ksh 500")
}
else if (gross_income>14999 && gross_income<20000){
    console.log("Your monthly contribution is Ksh 600")
}
else if (gross_income>19999 && gross_income<25000){
    console.log("Your monthly contribution is Ksh 750")
}
else if (gross_income>24999 && gross_income<30000){
    console.log("Your monthly contribution is Ksh 850")
}
else if (gross_income>29999 && gross_income<50000){
    console.log("your monthly contribution is Ksh 1000")
}
else if (gross_income>49999 && gross_income<100000){
    console.log("Your monthly contribution is Ksh 1500")
}
else{
    console.log("Your monthly contribution is Ksh 2000")
}