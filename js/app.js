'use strict';
console.log('js connected');

let parentElement = document.getElementById('locations');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function StoreLocation(minCust, maxCust, avgCookieSale, cookieTotal) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookieTotal = cookieTotal;
}

StoreLocation.prototype.cookiesPurchase = function() {
  for(let i = 0; i < hours.length; i++){
    this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
  }
};


StoreLocation.prototype.storeData = function(){
  this.cookiesPurchase();
  let article = document.createElement('article');
  parentElement.appendChild(article);
  let storeDescription = document.createElement('p');
  storeDescription.textContent = 'Store Location';
  article.appendChild(storeDescription);
  let storeSalesList = document.createElement('ul');
  article.appendChild(storeSalesList);
  for (let i = 0; i < hours.length; i++) {
    let storeListItem = document.createElement('li');
    this.totalDailyCookies += storeSeattle.cookieTotal[i];
    storeListItem.textContent = `${hours[i]} : ${storeSeattle.cookieTotal[i]}`;
    storeSalesList.appendChild(storeListItem);
  }
  let storetotalDailyCookies = document.createElement('li');
  storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
  storeSalesList.appendChild(storetotalDailyCookies);

};

function randomCustNum(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}


let storeSeattle = new StoreLocation(23, 65, 6.3, []);
let storeTokyo = new StoreLocation(3, 24, 1.2, []);
let storeDubai = new StoreLocation(11, 38, 3.7, []);
let storeParis = new StoreLocation(20, 38, 2.3, []);
let storeLima = new StoreLocation(2, 16, 4.6, []);

storeSeattle.storeData();
storeTokyo.storeData();
storeDubai.storeData();
storeParis.storeData();
storeLima.storeData();
