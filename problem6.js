//Create a DC Power and Voltage Calculator
'use strict';

const DCCalculator = ()=>{
   let voltage = 0;
   let powerResult = 0;
   
   let current = prompt('Please enter value of current:');
   let resistance = prompt('Please enter value of resistance:');
  
   //sanity
   if (current === ''|| resistance == "") console.info("Please Enter input Values");

   let choice = prompt("Please choose between Voltage(v) or Power(p): ");

   switch (choice) {
    case 'v':
           voltage += current * resistance;
           console.log("The Voltage is ", voltage," volts");
        break;

    case 'p':
          powerResult += Math.pow(current,2) * resistance;   
          console.log("The Power is ", powerResult," watts");
        break;
   
    default:
          console.error("Invalid Choice !!!");
        break;
   }
   
} 

DCCalculator();