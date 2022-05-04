function sumNumgers(input){
    
    let sum=0;
    let number=input[0].length;
    for(let i=0;i<number;i++){
        let strToNum = Number(input[0][i])
        sum+=strToNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNumgers(['564891'])