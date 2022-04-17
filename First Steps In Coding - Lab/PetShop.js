function zoo(value){
  const fDog = 2.50;
  const fCat = 4;
  
  const finalPrice = (fDog * Number(value[0])) + (fCat * Number(value[1]))
  console.log(`${finalPrice} lv.`)
}
