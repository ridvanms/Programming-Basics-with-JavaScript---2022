function pyramid(input) {
    let n = +input[0];
    let counter = 1;
    let num = 1;
    let str = '';
    while (num <= n) {
        for (let i = counter; i !== 0; i--) {
            str += `${num} `;
            if (num === n) {
                i === 0;
                num++;
                break;
            }
            num++;
        }
        console.log(str)
        str = '';
        counter++
    }
}
pyramid(['15'])