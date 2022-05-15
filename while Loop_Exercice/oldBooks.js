function oldBook(input) {
    let index = 0;
    let booksName = input[index]
    index++;
    let isBookHere = false;
    let booksChecker = 0;
    while (input[index] !== 'No More Books') {
        if (booksName === input[index]) {
            isBookHere = true;
            break;
        }
        booksChecker++;
        index++
    }
    if (!isBookHere) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecker} books.`)
    } else {
        console.log(`You checked ${booksChecker} books and found it.`)
    }
}
oldBook(['The Spot', 'Stronger', 'Life Style', 'Troy', 'The Spot'])
