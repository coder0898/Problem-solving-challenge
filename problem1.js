//Write a function to calculate Area of triangle
//area = 1/2 * (base * height)

function AreaOfTriangle(base , height) {
   let area ;
   let product = 1;    

   //sanity
   if (!base || !height) return 'Please enter valid input!!!';

   product *= base * height;
   area = (1/2) * product;

   return area;
}

console.log(AreaOfTriangle(3,2));