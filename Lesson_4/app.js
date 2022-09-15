var customer = {
  Name: "Eugene",
  Surname: "Kiselev",
  CustomerType: 1, // Физ.лицо
  IsInternetBankingUser: true,
  IsMobileBankingUser: false,
  Verification: null,
  AdditionalInfo: undefined,
  Sex: 1,
  "Passport Data": {
    ID: "AN",
    Series: "135617",
    ExpiryDate: "01.01.2030",
    Authority: "MKK 30-01",
  },
  Card: {
    Type: "Maestro",
    Pan: "1458 2514 2451 8795",
    ExpiryDate: "01.01.2025",
    PrintName: "Evgenii Kiselev",
  },
  Account: {
    Number: "0256151648949498",
    CurrentBalance: 50000,
    Currency: "KGS",
    OpenDate: new Date(2031, 0, 1),
    Branch: {
      Name: "uivnevkw",
      Address: "nodvmwekv",
    },
  },
};

// Arrays - массивы

var numbers = [5, 2, 3, 4, 5, 6, 7];
//              0 1 2 3 4 5 6 индексы
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

var fruits = ["banana", "raspberry", "apple", "cherry"];
//                0           1         2       3
fruits.push("melon");
fruits.push("grape");
fruits.push("blackberry");
console.log(fruits);

console.log(customer.Name[0] + customer.Surname[0]);

console.log(customer.Verification ? customer.Verification.length : 0);

//for (инициализация счетчика; условие выхода; изменение счетчика)
//перебор элементов по порядку
// for (var i = 0; i < fruits.length; i += 2) {
//   console.log("for 2: " + fruits[i] + " -> " + fruits[i].length + " chars");
// }

//перебор элементов в обратном порядке
// for (var i = fruits.length - 1; i >= 0; i--) {
//   var fruit = fruits[i];
//   console.log(fruit + " -> " + fruit.length + " chars");
// }
// for(;;) {} //бесконечный цикл

//for..of
// for (var fruit of fruits.reverse()) {
//   console.log("for..of " + fruit + " -> " + fruit.length + " chars");
// }

//цикл с фильтром
for (const fruit of fruits) {
  var fruitWordLength = 0;
  var fruitWordFirstChar = fruit[0];
  if (
    fruitWordFirstChar === "a" ||
    fruitWordFirstChar === "b" ||
    fruitWordFirstChar === "c"
  )
    continue;

  console.log(
    "for..of with filter " + fruit + " -> " + fruit.length + " chars"
  );
}

// var selectedFruit = prompt("Choose a fruit...");
// var attemptCount = 0;
// //цикл с поиском
// for (const fruit of fruits) {
//   attemptCount++;
//   if (fruit === selectedFruit) break;
//   console.log("Attempt #" + attemptCount + " failed((");
// }
// console.log("Attempt #" + attemptCount + " syccessfull)))");

// var currencies = ["USD", "EUR", "KGS", "RUB"];

// var rates = [
//   {
//     Currency: "USD",
//     CrossCurrency: "KGS",
//     Rate: "80.5",
//   },
//   {
//     Currency: "EUR",
//     CrossCurrency: "KGS",
//     Rate: "100",
//   },
//   {
//     Currency: "RUB",
//     CrossCurrency: "KGS",
//     Rate: "3",
//   },
//   {
//     Currency: "EUR",
//     CrossCurrency: "RUB",
//     Rate: "65",
//   },
// ];

// for (const cur of currencies) {
//   var tempRate = [];
//   for (const rate of rates) {
//     if (rate.Currency === cur) tempRate.push(rate.Rate);
//   }
//   console.log(cur + " has " + tempRate.length + " rates");
// }

// for (var i = 0; i < 10; i++) {
//   var row = "";
//   for (var j = 0; j < 10; j++) {
//     row += i === j ? "$" : "#";
//   }
//   console.log(row);
// }

//while(true){} бесконечный цикл
// var selectedFruit = prompt("Choose a fruit...");
// var counter = 0;
// while (counter < fruits.length || selectedFruit !== fruits[counter]) {
//     counter++;
// }

// var quessNumber = 5;
// do{
//     var userNumber = prompt("Guess number from 0..9");
// }while(quessNumber !== Number(userNumber))

//for..in
// var customerLog = "";
// for (const key in customer) {
//   customerLog +=
//     key +
//     " : " +
//     (typeof customer[key] === "object"
//       ? JSON.stringify(customer[key])
//       : customer[key]) +
//     "\n";
// }
// console.log(customerLog);

var fruitArray = {
  0: "banana",
  1: "raspberry",
  2: "apple",
};

for (const key in fruitArray) {
  console.log(key);
}
