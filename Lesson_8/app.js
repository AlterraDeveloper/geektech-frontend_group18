import { DEFAULT_SEPARATOR } from "./Constants.js";
import Task from "./Task";

//ECMAScript

//1) let const
var a;
var sum2;
function sum(a = 0, b = 0) {
  console.log(Array.isArray(arguments));
  console.log("Лишние аргументы =", [...arguments].slice(2));
  return a + b;
}

console.log("sum() = ", sum(5, 4, 3, 2, 1));
console.log(sum2);
a = 5;

let b = 6;

const c = 7;

//Hoisting

var sum2 = function (a, b) {
  return a + b;
};

var nameVar = "Eugene";
let nameLet = "Eugene";
const nameConst = "Eugene";

nameVar = "Evgenii";
nameLet = "Evgenii";
//nameConst = "Evgenii";

const numbers = [1, 2, 3];
const customer = {
  Name: "Eugene",
  Surname: "Kiselev",
  Account: {
    AccountNo: "89165186186949",
    Currency: "KGS",
    Balance: 0,
  },
  Card: undefined,
};

numbers.push(4);
console.log(numbers);

console.log(customer.Name);
delete customer.Name;
customer.Name = "Evgenii";
console.log(customer.Name);

//scopes

var victim = 5;

// function Mutant() {
//   victim = 10;
//   return victim * 10;
// }

// console.log(victim);
// Mutant();
// console.log(victim);

for (var i = 0; i < 10; i++) {
  let victim = 0;
  var victim2 = 10;
  if (true) {
    let victim = 25;
    console.log("Victim", victim);
  }
  console.log("Victim", victim);
}
console.log(victim2);

//template strings - шаблонные строки

console.log(
  "Уважаемый, " +
    customer.Surname +
    " " +
    customer.Name +
    ". Ваш счет " +
    customer.Account.AccountNo +
    "(" +
    customer.Account.Currency +
    ")" +
    " заблокирован. Текущий баланс: " +
    customer.Account.Balance
);

const customerFullName = `${customer.Surname} ${customer.Name}`;
const customerAccount = customer.Account;
console.log(
  `Уважаемый, ${customerFullName}. Ваш счет ${customerAccount.AccountNo}(${customerAccount.Currency}) заблокирован. Текущий баланс: ${customerAccount.Balance}`
);

//default params - параметры по умолчанию
//const DEFAULT_SEPARATOR = ",";
const GetDefaultSeparator = () => " | ";

console.log([1, 2, 3].join());
console.log(myJoin([1, 2, 3]));

function myJoin(array, separator = DEFAULT_SEPARATOR) {
  let result = "";
  // separator = separator || ","; старый синтаксис параметров по умолчанию
  for (let i = 0; i < array.length; i++) {
    result += array[i] + (i === array.length - 1 ? "" : separator);
  }
  return result;
}
// ?? null coalescing operator
console.log((customer.Card && customer.Card.CardNo) ?? "Card not found");

// Функции с переменным числом аргументов
// spread\rest operators

// function configureHttp() {
//   const httpProtocol = arguments[0];
//   const httpVerb = arguments[1];
//   const headers = [...arguments].slice(2);
//   return {
//     Protocol: httpProtocol,
//     Verb: httpVerb,
//     Headers: headers,
//   };
// }

//Улучшенная версия
//...headers - это rest operator
function configureHttp(httpProtocol, httpVerb, ...headers) {
  return {
    Protocol: httpProtocol,
    Verb: httpVerb,
    Headers: headers,
  };
}

const headers = [
  "Token:bearer118998489dfve9rf4ve9",
  "ContentType:application/json",
  "Encoding:UTF8",
];

const httpConfig = configureHttp("HTTP", "GET", ...headers);

httpConfig.UseCertificate = httpConfig.Protocol === "HTTPS";

//{...httpConfig} - это spread operator
const { Protocol: protocol, Verb: httpMethod } = { ...httpConfig };
console.log(protocol, httpMethod);

const numbers2 = [45, 1000, 8];
console.log(Math.max(...numbers2));

const tasks = [
  new Task(1, "learn HTML"),
  new Task(2, "learn CSS"),
  new Task(3, "learn JS"),
];

var array = [1, 4, 2, 4, 1, 2, 4, 1, 2, 4];
console.log([...new Set(array)]);
