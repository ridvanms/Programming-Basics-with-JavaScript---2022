function oscar(input){
    let actorName = input[0];
    let academyPoints = +input[1];

    let juriCounts = Number(input[2]);

    let indexOfPoints = 4;
    let indexOfJuriNames = 3;
    for (let i =juriCounts;i!==0;i--){
        academyPoints += (input[indexOfJuriNames].length*(Number(input[indexOfPoints])))/2;
        
        if(academyPoints >= 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }else if(academyPoints < 1250.5 && i===1){
            console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
            return;
        }
        indexOfPoints += 2;
        indexOfJuriNames +=2;
    }
}
oscar(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
oscar(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5",
       "Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"
])
