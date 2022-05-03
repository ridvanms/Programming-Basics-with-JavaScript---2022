function evenOnTwo(input){
    let n = Number(input[0]);

    for(let i=1;i<n+1;i++){
        if(i===1){
            console.log(i)
        }
        if(i % 2 ===0){
            console.log(2**i);
        }
    }
}
evenOnTwo(['6'])
