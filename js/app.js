'use strict';
console.log('js connected');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let storeSeattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookieTotal: []
};

let storeTokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2

};
let storeDubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7

};
let storeParis = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 3.7

};
let storeLima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6

};

// function randomCustNum(minCust, maxCust) {
//   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
// }
