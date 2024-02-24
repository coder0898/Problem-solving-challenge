//Create a function that calculate cube/square of a number;

const CubeOfNumber = (inputNumber) =>{
    let cubeNumber;
   
    //sanity
    if (isNaN(inputNumber)) return `Please put valid input`;

    cubeNumber = inputNumber ** 3;

    return `The cube of ${inputNumber} is ${cubeNumber}`;
}

console.log(CubeOfNumber(4));