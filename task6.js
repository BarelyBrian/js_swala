// Create an arrow function called fizzBuzz that takes one parameter called num, checks the value of num and prints "Fizz" if the number is divisible by 3 and "Buzz" if it is divisible by 5. 
const fizzBuzz = (num) =>{
    if (num%15 ==0){
        console.log("FizzBuzz")
    }
    else if (num%5 ==0){
        console.log("Buzz")
    }
    else if (num%3==0){
        console.log("Fizz")
    }
    else{
        console.log("Try another number")
    }
}
fizzBuzz(510)