// Write a for loop to find the largest number in the array: [10,20,4,45,99,1]
let number = [10, 20, 4, 45, 99, 1];
let largest = number[0];
for (let i=1; i<number.length; i++){
    if(number[i]>largest){largest=number[i]}
}{
    console.log("The largest number is: " + largest);
}