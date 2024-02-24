//Convert Age to Days
//Create a function that takes the age in years and returns the age in days.
//Note
//Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const ConvertAgeToDays = (ageInput) =>{

    let dayResults = 0;
    let dayInYear = 365; 

    //sanity
    if (isNaN(ageInput)) return `Please put valid input`;

    dayResults = ageInput * dayInYear;

    return `${dayResults} days`;
}

console.log(ConvertAgeToDays(25));