function vacation(input) {
    let index = 0;
    let needMoneyForVacation = +input[index];
    index++;
    let currentMoney = +input[index];
    index++;

    let spendDayCounter = 0;
    let dayCounter = 0;
    let isSpendMoney = false;
    while (needMoneyForVacation > currentMoney) {
        dayCounter++;
        let command = input[index];
        index++;
        let tempMoney = +input[index];
        index++;

        switch (command) {
            case 'spend':
                currentMoney -= tempMoney;
                spendDayCounter++;
                break;
            case 'save':
                currentMoney += tempMoney;
                spendDayCounter = 0;
        }
        if (currentMoney < 0) currentMoney = 0;
        if (spendDayCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            isSpendMoney = true;
            break;
        }
    }
    if (!isSpendMoney) console.log(`You saved the money for ${dayCounter} days.`);

}