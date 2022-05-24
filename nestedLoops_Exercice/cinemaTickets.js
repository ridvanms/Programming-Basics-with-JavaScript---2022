function tickets(input) {
    let index = 0
    let command = input[index];

    let totalTicketsCount = 0;
    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidTicketsCount = 0;
    while (command !== 'Finish') {
        let moveName = command;
        index++;
        let places = +input[index];
        index++;
        let soldTickets = 0;
        while (input[index] !== 'End') {
            let tempCommand = input[index];
            totalTicketsCount++;
            soldTickets++;
            switch (tempCommand) {
                case 'student': studentTicketsCount++; break;
                case 'standard': standardTicketsCount++; break;
                case 'kid': kidTicketsCount++; break;
            }
            if (places <= soldTickets) {
                break;
            }
            index++;
        }
        index++;
        command = input[index];
        console.log(`${moveName} - ${(soldTickets / places * 100).toFixed(2)}% full.`)
    }
    console.log(`Total tickets: ${totalTicketsCount}`)

    console.log(`${(studentTicketsCount / totalTicketsCount * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTicketsCount / totalTicketsCount * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTicketsCount / totalTicketsCount * 100).toFixed(2)}% kids tickets.`)
}
tickets(['Taxi', '10', 'standard', 'kid', 'student',
    'student', 'standard', 'standard', 'End', 'Scary Movie',
    '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);