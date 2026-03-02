// anonymous function is one that does not have a name and is usually assigned to a variable and passed as an argument or used immediately
const greet = function(){
    console.log("Hello World")
}
// call the function using the variable name which is greet in this case
greet()

// Create am anonymous function with parameters to check the difference of 2 numbers
const difference=function(num1,num2){
    let answer= num1-num2
    console.log(`The answer is ${answer}`)
}
difference(12,10)

// create an anonymous function with parameters to find the product of 2 numbers
const product= function(num1,num2){
    let answer= num1 * num2
    console.log(`The product of ${num1} and ${num2} is: ${answer} `)
}
product(10,7)