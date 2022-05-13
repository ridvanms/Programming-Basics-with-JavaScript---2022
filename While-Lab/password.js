function password(input){
    let name = input[0];
    let password =input[1];

    let result='InCorrect password';

    let correct = false
    let i = 2;
    while (!correct){
        if(password===input[i]){
            result = `Welcome ${name}!`;
            correct = true;
        }
        i++;
    }
    console.log(result);
}
