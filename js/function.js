function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
}

function getUserAnswer(question, propCheck) {
    let res;
    do {
        res = parseInt(prompt(question));
    } while (res < 1 || res > propCheck || isNaN(res));
    return res;
}

function isDiscountAvalable() {
    if (productPrice >= discountStartsFrom) {
        return true;
    } else {
        return false;
    }
}

function calcFinalPrice() {
    let finalPrice;
    if (isDiscount === true) {
        finalPrice = productPrice - productPrice * discountPercentage;
    } else {
        finalPrice = productPrice;
    }
    return finalPrice;
}

function showFinalPrice() {
    if (isDiscount === true) {
        console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
    } else {
        console.log(`The final price is ${productPrice}`);
    }
}



