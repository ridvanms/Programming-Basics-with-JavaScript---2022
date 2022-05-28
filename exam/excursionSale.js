function excursionSale(input) {
    let index = 0
    let excursiForSeaCounts = +input[index];
    index++
    let excursiForMountainCounts = +input[index];
    index++;

    let collectMoney = 0;
    while (input[index] !== 'Stop') {

        let excurisa = input[index];
        if (excurisa === 'sea' && excursiForSeaCounts !== 0) {
            collectMoney += 680;
            excursiForSeaCounts--;
        } else if (excurisa === 'mountain' && excursiForMountainCounts !== 0) {
            collectMoney += 499;
            excursiForMountainCounts--;
        }

        if (excursiForMountainCounts === 0 && excursiForSeaCounts === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }

        index++;
    }
    console.log(`Profit: ${collectMoney} leva.`)
}
excursionSale(['2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain']);