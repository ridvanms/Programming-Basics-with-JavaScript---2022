function oscar(input){
    let actorName = input[0];
    let academyPoints = +input[1];

    let result = '';
    
    let indexOfPoints = 4;
    let indexOfJuriNames = 3;
    for (let i =input.length;i!==1;i--){
        academyPoints += (indexOfJuriNames*(Number(input[indexOfPoints])))/2;
        
        if(academyPoints >= 1250.5){
            result=`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints}!`;
            return result;
        }else if(academyPoints < 1250.5 && i===2){
            result = `Sorry, ${actorName} you need ${1250.5 - academyPoints}`;
            return result;
        }
        indexOfPoints += 2;
        indexOfJuriNames +=2;
    }
    console.log(result);
}
oscar(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
