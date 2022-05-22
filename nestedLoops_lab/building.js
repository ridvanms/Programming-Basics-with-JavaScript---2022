function building(input) {
    let str = '';
    for (let floor = +input[0]; floor !== 0; floor--) {
        for (let room = 0; room < +input[1]; room++) {
            if (floor === +input[0]) {
                str += `L${floor}${room} `
            } else if (floor % 2 === 0) {
                str += `O${floor}${room} `;
            } else {
                str += `A${floor}${room} `;
            }
        }
        console.log(str);
        str = '';
    }
}
building(['6', '4'])