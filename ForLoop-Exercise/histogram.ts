function histogram(input){
    
    let pArr = [0,0,0,0,0];
    for(let i=1;i<+input[0]+1;i++){
        if(+input[i] >= 800){
            pArr[4] +=1;
        }else if(+input[i] > 599 && +input[i] < 800){
            pArr[3] +=1;
        }else if(+input[i] >399 && +input[i] < 600){
            pArr[2] +=1;
        }else if(+input[i] >199 && +input[i] < 400){
            pArr[1] += 1;
        }else if(+input[i] <200){
            pArr[0] += 1;
        }
    }
    console.log(pArr);
    pArr.forEach(p=>{
        p = p / 20 * 100;
        console.log(`${p.toFixed(2)}%`)
    })
}
histogram(["7","800","801","250","199","399","599","799"])
// console.log((12/20*100).toFixed(2)+'%')
