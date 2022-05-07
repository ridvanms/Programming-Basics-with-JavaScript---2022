function smartLily(input){
    let birthsYear = +input[0];
    let priceWMachine = +input[1];
    let pricePerToy = +input[2];
 
    let toysCount=0;
    let money=0;
    for(let i =1;i<birthsYear+1;i++){
        if(i % 2 ===0){
            // lily receive money
            money+=10 * (i/2);
            // her brother taking 1lv for each even year
            money-=1;
        }else{
            toysCount += 1;
        }
    }
    // earn money from toies
    money += toysCount * pricePerToy;
    if(money >= priceWMachine){
        console.log(`Yes! ${(money - priceWMachine).toFixed(2)}`)
    }else{
        console.log(`No! ${(priceWMachine - money).toFixed(2)}`);
    }
}
smartLily(["10","170.00","6"]);
