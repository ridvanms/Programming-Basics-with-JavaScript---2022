function ranklist(input){
    let tournamentsCount = Number(input[0]);
    let startPoints = Number(input[1]);
    let etap = input[2];
    // positions
    let positions={
        "W":2000,
        "F":1200,
        "SF":720,
    }
    // calculating the points wich depends on position that he played
    let finalPoints = startPoints;

    
    let winsCount = 0;
    for(let i = tournamentsCount+1;i!==1;i--){
        finalPoints += positions[`${input[i]}`];
        
        
        
        if(input[i]==='W'){
            winsCount+=1;
        }
    }
    // calculating average points
    let averagePoints = (finalPoints-startPoints) / tournamentsCount;
    // calculating wins percentages
    let percentageOfWins = winsCount / tournamentsCount * 100;
    
    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${Math.round(averagePoints)}`)
    console.log(`${percentageOfWins.toFixed(2)}%`)
}
