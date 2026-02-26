// How to use if else if statement in js
let age=19;
if(age<0){
    console.log("Invalid age")
}
else if(age<=18){
    console.log("You are a Minor")
}
else if(age>=18 && age<21){
    console.log("You are an Adult but too young to drink")
}
else{
    console.log("You are an Adult and can drink")
}