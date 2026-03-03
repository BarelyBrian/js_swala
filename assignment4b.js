// JS Anonymous function to take 3 parameters mark1,mark2,amrk3 and calculate the average mark.If average>=, then grade is A. If avergae is >=60 and<70, then grade is B.If average is >=50 and <60 then grade is C. If average is less than 50, then fail.
// Return the avergae and the grade, store the function in variable gradeStudent and variable then call the function using marks 65,72 and 58.

(function(mark1,mark2,mark3){
    let total=mark1+mark2+mark3
    let average= total/3
    console.log(`Your average score is: ${average}`)
    if (average>100 || average<0){
        console.log("Invalid marks")
    }
    else if(average>=70 && average<=100){
        console.log("Your Grade is A")
    }
    else if(average>=60 && average<70){
        console.log("Your Grade is B")
    }
    else if(average>=50 && average<60){
        console.log("Your Grade is C")
    }
    else{
        console.log("Fail")
    }
})(65,72,58);