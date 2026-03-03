//Write a JS arrow function called showNumber that takes no parameters, stores the number 4 inside the unction,uses modulus operator to check whether the number is even or odd, and prints the output. Call the function to display the output

const showNumber = () => {
    let number = 1;
    if(number % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}
showNumber();