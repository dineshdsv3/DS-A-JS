// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in 
// a game. Points scored in the first game establish her record for the season,
//  and she begins counting from there.

// Given the scores for a season, find and print the number of times Maria breaks 
// her records for most and least points scored during the season.

// Output - breakTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]) => [2 4]

function breakTheRecords(scores) {
    let max =scores[0], min = scores[0];
    let maxRecord = 0, minRecord = 0;
    
   for(let i=1; i<scores.length;i++) {
       if(scores[i] < min) {
           min = scores[i];
           minRecord++;
       } else if (scores[i] > max) {
           max = scores[i];
           maxRecord++;
       }
   }
   return [maxRecord,minRecord]
}

console.log(breakTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))