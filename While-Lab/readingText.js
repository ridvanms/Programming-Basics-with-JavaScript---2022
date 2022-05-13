function reading(input){

    let words = '';
    let i = 0;

    let stop = true;
    while(stop){
        if(input[i] !== 'Stop'){
            words += `${input[i]}\n`;
        }else{
            stop = false;
        }
        i++;
    }
    console.log(words)
}
reading(['Nakov','SoftUni','Sofia','Stop','SomethingElse'])
