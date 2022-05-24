function tickets(input) {
    let totalTickets = 0;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    let index = 0;
    while (input[index] !== 'Finish') {
        input[index] === 'End' ? index++ : '';
        let moveName = input[index];
        index++;
        let places = +input[index];
        index++;
        let tookedPlaces = 0;
        while (input[index] !== 'End') {
            let temp = input[index]
            totalTickets++;
            tookedPlaces++;
            if (temp === 'student') {
                studentTickets++;
            } else if (temp === 'standard') {
                standardTickets++;
            } else if (temp === 'kid') {
                kidsTickets++;
            }
            if (places <= tookedPlaces) {
                break;
            }
            index++;
        }
        console.log(`${moveName} - ${(tookedPlaces / places * 100).toFixed(2)}% full.`)
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`)
}
tickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])