// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს.
function squareIt(number) {
  return Math.pow(number, 2);
}
console.log(squareIt(5));

// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
function salePrice(price = 1000, sale = 0.1) {
  return price * sale;
}
console.log(salePrice());

// 3.Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.Math.floor() - ამრგვალებს რიცხვს ნაკლებობით, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// // დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandomArbitrary(min = 0, max = 100) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary());

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტრინგის სიგრძეს (თუ რამდენი სიმბოლოსგან შედგება)
function getCharacterLength(str) {
  return [...str].length;
}
console.log(getCharacterLength("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

// 5. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის rate მნიშვნელობაც არის უმცირესი
const currencies = [
  {
    code: "AED",
    quantity: 10,
    rateFormated: "6.8886",
    diffFormated: "0.0082",
    rate: 6.8886,
    name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
    diff: -0.0082,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.4869",
    diffFormated: "0.0334",
    rate: 6.4869,
    name: "სომხური დრამი",
    diff: -0.0334,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "CZK",
    quantity: 10,
    rateFormated: "1.1820",
    diffFormated: "0.0010",
    rate: 1.182,
    name: "ჩეხური კრონა",
    diff: 0.001,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.7599",
    diffFormated: "0.0056",
    rate: 2.7599,
    name: "ევრო",
    diff: -0.0056,
    date: "2023-04-10T17:45:04.522Z",
    validFromDate: "2023-04-11T00:00:00.000Z",
  },
];

function getArr(currencies) {
  const rates = currencies.map((el) => el.rate);
  return Math.min(...rates);
}
console.log(getArr(currencies));
