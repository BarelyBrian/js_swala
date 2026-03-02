// IIFE is Immediately Invoked Function and Expression
// It immediately runs when anything inside the function remains local and cannot be accessed outside the function

// example 1
(function(){
    console.log("Test IIFE")
})();

// Create a self calling anonymous function to add 2 numbers
(function(){
    let x=67
    let y=69
    console.log(x+y)
    console.log(typeof(x))
})();
// x and y are only inside IIFE. Outside the function, X does not exist, hence it is local