// Functions with parameters and arguments
function greet(name){
    console.log("Hello " + name)
}
// calling the function
greet("Malcolm")

// Write a JS function that is accepting county_name as a parameter and log a message , "My county is " + county_name
function myCounty(county_name){
    console.log("My county is " + county_name)
}
myCounty("Nairobi")

// create a function called add which accepts num1 and num2 as parameters to find the sum of the 2 numbers
function add(num1,num2){
    let answer=num1+num2
    console.log(`The answer is ${answer}`)
}
add(9,10)