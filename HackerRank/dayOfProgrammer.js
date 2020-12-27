// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer 
// (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the 
// Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in
//  1918, when the next day after January 31st was February 14th. This means that in 1918, 
// February 14th was the 32nd day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days; 
// it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, 
// leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

// Divisible by 400.
// Divisible by 4 and not divisible by 100.

function dayOfProgrammer(year) {
    if (year > 1918)
       if ((year%400==0)|| (year%4==0 && year%100 != 0))
           return("12.09."+year)
       else
           return("13.09."+year)
   else if (year < 1918)
       if (year%4==0)
           return("12.09."+year)
       else
           return("13.09."+year)
   else if (year==1918)
       return("26.09."+year)

}

console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(2020))
console.log(dayOfProgrammer(2021))
console.log(dayOfProgrammer(2100))
console.log(dayOfProgrammer(1918))