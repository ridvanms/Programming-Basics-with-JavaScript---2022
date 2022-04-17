function greening(value) {
  const pricePerMeter = 7.61;
  const discountPrice = 0.18;

  const price = Number(value[0]) * pricePerMeter;
  const discount = price * discountPrice;

  const finalPrice = price - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
