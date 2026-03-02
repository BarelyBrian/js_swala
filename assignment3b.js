// Write a JS program without parameters called calculateResult that declares 2 numbers, calculates their sum, their difference, their product and displays all results clearly in the console. Finally call the function to show output
function calculateResult(){
    let num1=42
    let num2=31
    sumAnswer=num1+num2
    differenceAnswer=num1-num2
    productAnswer=num1*num2
    console.log(`The sum of the 2 numbers is: ${sumAnswer}`)
    console.log(`The difference of the 2 numbers is: ${differenceAnswer}`)
    console.log(`The product of the 2 numbers is: ${productAnswer}`)
}
calculateResult()