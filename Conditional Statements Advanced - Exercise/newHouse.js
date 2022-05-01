// skiTrip
function skiTrip(input){
    let dayCount = +input[0];
    let type = input[1];
    let rating = input[2];

    let price =0;
    switch (type){
        case 'room for one person':
            price =(dayCount -1) *18.00;
            break;
        case 'apartment':
            price = (dayCount -1 ) * 25.00;
            if(dayCount < 10){
                price = price * 0.7;
            }else if(dayCount >= 10 && dayCount <= 15){
                price = price * 0.65;
            }else{
                price = price * 0.5;
            }
            break;
        case 'president apartment':
            price = (dayCount -1) * 35;
            if(dayCount < 10){
                price = price * 0.9;
            }else if(dayCount >= 10 && dayCount <= 15){
                price = price * 0.75;
            }else{
                price = price * 0.80;
            }
            break;
    }
    if(rating === "positive"){
        price = price * 1.25;
    }else{
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip(['12','room for one person','positive']);
