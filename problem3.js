//Return the Next Number from the Integer Passed
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

const ReturnNextNumber = (inputNumber) =>{
    let nextNumber = 0;

    //sanity
    if (isNaN(inputNumber)) return `Please put valid input`;
 
    nextNumber += inputNumber + 1;

    return nextNumber; 
}

console.log(ReturnNextNumber());