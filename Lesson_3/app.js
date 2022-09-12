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

var customerCardType = customer.Card.Type;

var dateNow = new Date();

var customerAccountActivePeriodInMonthes;

if (customer.Account.OpenDate > dateNow) {
  customerAccountActivePeriodInMonthes = 0;
} else {
  customerAccountActivePeriodInMonthes = Math.ceil(
    (dateNow - customer.Account.OpenDate) / (1000 * 60 * 60 * 24 * 30)
  );
}

//falsy : false, undefined, null, 0, '', document.All

if (customerAccountActivePeriodInMonthes) {
  if (customerAccountActivePeriodInMonthes <= 24) {
    console.log("Short-term account");
  } else if (
    customerAccountActivePeriodInMonthes > 24 &&
    customerAccountActivePeriodInMonthes <= 60
  ) {
    console.log("Middle-term account");
  } else if (customerAccountActivePeriodInMonthes > 60) {
    console.log("Long-term account");
  } else {
    console.error(
      "Unknown error. Details: Period = ",
      customerAccountActivePeriodInMonthes
    );
  }
}

var customerCardType = customer.Card.Type;

// if (customerCardType === "Visa") {
//   console.log("Get card balance from Visa processing...");
// } else if (
//   customerCardType === "MasterCard" ||
//   customerCardType === "Maestro"
// ) {
//   console.log("Get card balance from MasterCard processing...");
// } else {
//   console.log("Unknown card processing");
// }

switch (customerCardType) {
  case "Visa":
    console.log("Get card balance from Visa processing...");
    break;
  //case ("MasterCard", "Maestro"):
  case "MasterCard":
  case "Maestro":
    console.log("Get card balance from MasterCard processing...");
    break;
  case "Elcard":
    console.log("Get card balance from IPC processing...");
  default:
    console.log("Unknown card processing");
    break;
}

//Conditions - Условия
if (customer.Sex == 1) {
  console.log("Пол: Мужской");
} else {
  console.log("Пол: Женский");
}

//тернарный: условие ? значение_если_true : значение_если_false
console.log("Пол: " + (customer.Sex === 1 ? "Мужской" : "Женский"));
console.log(customer.CustomerType ? "Физ" : "Юр");

// Так делать не стоит
var fakeCustomerType = 2;
console.log(fakeCustomerType ? (fakeCustomerType === 1 ? "Женский" : "Мужской") : "Юр.лицо");