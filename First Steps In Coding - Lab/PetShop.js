function zoo(value){
  let dogsCount=+value[0];
  let catsCount = +value[1];
  
  const fDog = 2.50;
  const fCat = 4;
  
  const finalPrice = (fDog * dogsCount) + (fCat * catsCount)
  console.log(`${finalPrice} lv.`)
}
