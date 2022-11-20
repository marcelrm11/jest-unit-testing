const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    JPY: 127.9,
    USD: 1.206,
    GBP: 0.8
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromDollarToYen(dollars) {
    return dollars / oneEuroIs.USD * oneEuroIs.JPY;
}

function fromYenToPound(yens) {
    return yens / oneEuroIs.JPY * oneEuroIs.GBP;
}

module.exports = {sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound};