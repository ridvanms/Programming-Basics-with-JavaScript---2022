function summing(input){
    let word=input[0];
    // letters
    let letters = ['a','e','i','o','u'];
    // summing
    let sum=0;
    for(let i=0;i<word.length;i++){
        if(letters.includes(word[i])){
            if(word[i] ==='a'){
                sum+=1;
            }else if(word[i]==='e'){
                sum+=2;
            }else if(word[i]==='i'){
                sum+=3;
            }else if(word[i]==='o'){
                sum+=4;
            }else if(word[i]==='u'){
                sum+=5;
            }
        }
    }
    console.log(sum)
}
summing(['beer'])
