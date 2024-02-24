//Create a function to convert hours into seconds
//ex - 1hours = 60sec

const ConvertHoursToSeconds = (hoursInput)=>{
   let resultInSeconds ;

   //sanity
   if (!hoursInput) return 'Please enter valid Input!!!';

   resultInSeconds = hoursInput * 60;

   return `${resultInSeconds} sec`;
}

console.log(ConvertHoursToSeconds(2));