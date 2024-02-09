/*
+0) prepare data
+1) show all products with prices
+2) show prompt with request to enter product number (validation)
+3) create arr with right product index
+4) show prompt with request to enter product amount (validation)
+5) calculate price
+6) check if discount available
+7) if so - calculate final price
+8) show final price
*/


// 1
showProducts();
// 2
let = productNumber = getUserAnswer('Enter product №', products.length);
// 3
const productToBuy = products[productNumber - 1];
// 4
let productAmount = getUserAnswer('Enter amount of products you wanna buy', productToBuy.availability)
// 5
const productPrice = productToBuy.price * productAmount;
// 6
const discountPercentage = 0.2;
const discountStartsFrom = 10000;
let isDiscount = isDiscountAvalable();
// 7
let finalPrice = calcFinalPrice();
// 8
showFinalPrice ();

