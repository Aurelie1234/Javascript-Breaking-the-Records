function breakingRecords(scores) {


let highScore = scores[0];
let lowScore = scores[0];
let num_mostpoints = 0;
let num_leastpoints = 0;


    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
            num_mostpoints++;
        } else if (scores[i] < lowScore) {
            lowScore = scores[i];
            num_leastpoints++;
        }
    }


    return [num_mostpoints,num_leastpoints] ;
     
}
