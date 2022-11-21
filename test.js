const {sum} = require("./app");

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
    const {fromEuroToDollar} = require("./app");
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.206;
    expect(dollars).toBeCloseTo(expected);
});

test("One dollar should be 106.05 yens", () => {
    const {fromDollarToYen} = require("./app");
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 / 1.206 * 127.9;
    expect(yens).toBeCloseTo(expected);
});

test("1000 yens should be 6.25 pounds", () => {
    const {fromYenToPound} = require("./app");
    const pounds = fromYenToPound(1000);
    const expected = 1000 / 127.9 * 0.8;
    expect(pounds).toBeCloseTo(expected);
});