function trekking(input){
    let groupsCount = +input[0];
    // total counts of people
    let totalPeople = 0;

    // mountains
    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    
    for (let i = input.length -1;i!==0;i--){
        totalPeople += +input[i];
        if(+input[i] >= 41){
            Everest += +input[i];
        }else if(+input[i] >= 26){
            K2+= +input[i];
        }else if(+input[i] >= 13){
            Kilimandjaro += +input[i];
        }else if(+input[i] >= 6){
            Monblan += +input[i];
        }else if(+input[i] > 0){
            Musala += +input[i];
        }
    }
    // calculating the percentages
    Musala = Musala / totalPeople*100;
    Monblan = Monblan / totalPeople * 100;
    Kilimandjaro = Kilimandjaro / totalPeople * 100;
    K2 = K2 / totalPeople * 100;
    Everest = Everest / totalPeople * 100;
    
    console.log(`${Musala.toFixed(2)}%\n${Monblan.toFixed(2)}%\n${Kilimandjaro.toFixed(2)}%\n${K2.toFixed(2)}%\n${Everest.toFixed(2)}%`)
};
trekking(['10','10','5','1','100','12','26','17','37','40','78']);
