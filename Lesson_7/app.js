function MakeDiscount(price, discountCb) {
  return discountCb(price);
}

const itemPrice = 1000;

// Замыкания - clojures
const MakePercentDiscount = function (discountPercent) {
  return (price) => price * ((100 - discountPercent) / 100);
};
const MakeFixedDiscount = (discountFix) => (price) => price - discountFix;

const MakePercentDiscountForKids = MakePercentDiscount(15);
const MakePercentDiscountForPencioneers = MakePercentDiscount(25);

const MakeFixedDiscountBasedOnPromocode = MakeFixedDiscount(500);

console.log(MakeDiscount(1000, MakePercentDiscountForKids));
console.log(MakeDiscount(1000, MakeFixedDiscountBasedOnPromocode));

console.log(
  MakeDiscount(5000, function (price) {
    return 0;
  })
);
console.log(MakeDiscount(5000, (price) => 0));

// map filter reduce

const numbers = [5, 4, 3, 2, 1];

//Map
const numbersSquared = numbers.map((num) => num ** 2);
console.log(numbersSquared);

const names = ["ivan", "petr", "vasiliy"];
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const capNames = names.map(capitalize);
console.log(capNames);

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const numbersSum = numbers.reduce((sum, num) => (sum += num), 0);
console.log(numbersSum);

const a = numbers
  .filter((x) => x % 2 === 0)
  .map((x) => x ** 2)
  .reduce((sum, x) => (sum += x));

  console.log(a);
