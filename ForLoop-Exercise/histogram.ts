function histogram(input){
    let numbersCount = +input[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = numbersCount;i!==0;i--){
        if(+input[i]>= 800){
            p5 += 1;
        }else if(+input[i]>= 600){
            p4 += 1;
        }else if(+input[i]>=400){
            p3 += 1;
        }else if(+input[i]>=200){
            p2 += 1;
        }else{
            p1 += 1;
        }
    }
    p1 = p1 / numbersCount * 100;
    p2 = p2 / numbersCount * 100;
    p3 = p3 / numbersCount * 100;
    p4 = p4 / numbersCount * 100;
    p5 = p5 / numbersCount * 100;

    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)

}
histogram(["7","800","801","250","199","399","599","799"])
