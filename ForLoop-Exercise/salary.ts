function salary(input){
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    
    // calculating the penalties
    for (let i = 2;i <= input.length;i++){
       switch(input[i]){
           case "Facebook":
               salary -= 150;
               break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
       }
       if(salary <= 0 ){
           console.log(`You have lost your salary.`);
           return;
       }
    }
    console.log(salary); 
}
