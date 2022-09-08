/*
Это первый урок
по JavaScript
в GeekTech
*/

var customerNameAndSurname = "Evgenii Kiselev"; // Camel Case
var customer_name_and_surname = ""; // Snake case

console.log(customerName);

//Типы данных Data types

//1. String - текстовый, строковый
var customerName = "Evgenii";
var customerSurname = "Kiselev";
var customerBirthDate = "01.01.1990";

//Concatenation - Конкатенация
var customerFullName = customerSurname + " " + customerName;

console.log("Customer fullname is : ", customerFullName);

var agreementText = 'Transfer successfully sended by "Unistream"';

//Экранирование - escaping
var customerPassportScanFullPath = "D:\\Data\\Customers\\1818919\\Passport.pdf";

console.log("File successfully uploaded to:", customerPassportScanFullPath);
console.log(agreementText);

// 2. Number - Числовой

var customerAccountBalance = 5000;

console.log(customerAccountBalance + 5000);
console.log(customerAccountBalance - 5000);
console.log(customerAccountBalance * 2);
console.log(customerAccountBalance / 2);
console.log("Percents: ", customerAccountBalance % 2);
console.log(customerAccountBalance ** 2);

// customerAccountBalance = customerAccountBalance / 0;

console.log(customerAccountBalance);

customerAccountBalance = customerAccountBalance + 1000;
var wrongBalance = -Infinity;
console.log(isFinite(customerAccountBalance));
console.log(wrongBalance);

var bankDealAmount1 = 50000;
var bankDealAmount2 = 150000;

var bankDealTotalAmount = bankDealAmount1 + bankDealAmount2;
var percentDealAmount = bankDealTotalAmount * "10%"; //NaN - Not a Number
console.log("Total amount: ", bankDealTotalAmount);
console.log("Total percents: ", percentDealAmount ** 2);

// 3. Boolean - Логический

var customerIsInternetBankingUser = false;
var cusotomerIsMobileBankingUser = true;

var customerIsOnlineUser =
  customerIsInternetBankingUser || cusotomerIsMobileBankingUser;
var customerFullOnlineUser =
  customerIsInternetBankingUser && cusotomerIsMobileBankingUser;

console.log(!customerIsInternetBankingUser);
console.log(customerIsInternetBankingUser && cusotomerIsMobileBankingUser);
console.log(customerIsInternetBankingUser & cusotomerIsMobileBankingUser);
console.log(customerIsInternetBankingUser || cusotomerIsMobileBankingUser);
console.log(customerIsInternetBankingUser | cusotomerIsMobileBankingUser);
console.log(customerIsInternetBankingUser ^ cusotomerIsMobileBankingUser);

var isLoginCorrect = true;
var isPasswordCorrect = true;
var isOtpCorrect = false;

var test1 = () => false;
var test2 = () => {
  console.log("test test");
  return false;
};

// console.log("|| = ", test1() || test2());
// console.log("| = ", test1() | test2());
// console.log("&& = ", test1() && test2());
// console.log("& = ", test1() & test2());

//4. undefined - неопределенный

var customerType;

console.log(customerType);
console.log(typeof customerType);

//5. null

var customerVerification = null;

//console.log(customerVerification.RiskLevel); //Type Error: null reference exception

//6. object - объект

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
};

console.log("Customer name is", customer.Name);
console.log("Customer surname is", customer.Surname);
console.log(
  "Customer's document expires at",
  customer["Passport Data"].ExpiryDate
);
console.log(customer);
console.table(customer);

//Operators

//1. Унарные операторы

var minusOper = -customerAccountBalance;
var booleanNegatiation = !true;

//2. Бинарные операторы
var plusOperator = 5 + 5;
var plusOperator = 5 - 5;
var plusOperator = 5 * 5;
var plusOperator = 5 / 5;
var plusOperator = 5 % 5;
var plusOperator = 5 ** 5;

var booleanAnd = true && true;
var booleanOr = true || true;
var booleanXor = true ^ true;
var booleanEqual = 5 == 10;
var booleanEqual = 5 === 10;
var booleanNotEqual = 5 != 10;
var booleanNotEqual = 5 !== 10;

// console.log("Customer current balance:", customerAccountBalance);
// customerAccountBalance += 5000; //customerAccountBalance = customerAccountBalance + 5000;
// customerAccountBalance -= 5000; //customerAccountBalance = customerAccountBalance - 5000;
// customerAccountBalance *= 5000; //customerAccountBalance = customerAccountBalance * 5000;
// customerAccountBalance /= 5000; //customerAccountBalance = customerAccountBalance / 5000;
// customerAccountBalance %= 5000; //customerAccountBalance = customerAccountBalance % 5000;
// customerAccountBalance **= 5000; //customerAccountBalance = customerAccountBalance ** 5000;

//increment
customerAccountBalance = customerAccountBalance + 1;
customerAccountBalance += 1;
customerAccountBalance++;

//decrement
customerAccountBalance = customerAccountBalance - 1;
customerAccountBalance -= 1;
customerAccountBalance--;

// console.log("Customer current balance:", customerAccountBalance++);
console.log("Customer current balance:", ++customerAccountBalance);

//Conditions - Условия
if (customer.Sex == 1) {
  console.log("Пол: Мужской");
} else {
  console.log("Пол: Женский");
}
