'use strict';
console.log('js connected');

let storeTable = document.getElementById('store-location-data');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let tableHead = document.createElement('tr');
storeTable.appendChild(tableHead);
let tableLocationHead = document.createElement('th');
tableLocationHead.textContent = 'Location';
tableHead.appendChild(tableLocationHead);

for(let i = 0; i < hours.length; i++){
  let tableHoursHead = document.createElement('th');
  tableHoursHead.textContent = hours[i];
  tableHead.appendChild(tableHoursHead);
}

let tableTotalHead = document.createElement('th');
tableTotalHead.textContent = 'Total';
tableHead.appendChild(tableTotalHead);

function StoreLocation(storeName, minCust, maxCust, avgCookieSale, totalDailyCookies, cookieTotal) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalDailyCookies = totalDailyCookies;
  this.cookieTotal = cookieTotal;
}

StoreLocation.prototype.cookiesPurchase = function() {
  for(let i = 0; i < hours.length; i++){
    this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
  }
};


StoreLocation.prototype.storeData = function(){
  this.cookiesPurchase();
  let storeRow = document.createElement('tr');
  storeTable.appendChild(storeRow);
  let storeHead = document.createElement('th');
  storeHead.textContent = this.storeName;
  storeRow.appendChild(storeHead);
  for (let i = 0; i < hours.length; i++) {
    this.totalDailyCookies += this.cookieTotal[i];
    let storeCell = document.createElement('td');
    storeCell.textContent = this.cookieTotal[i];
    storeRow.appendChild(storeCell);
  }
  let storeTotalDailyCookies = document.createElement('td');
  storeTotalDailyCookies.textContent = this.totalDailyCookies;
  storeRow.appendChild(storeTotalDailyCookies);


  console.log(this.cookieTotal);
};

function randomCustNum(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}


let storeSeattle = new StoreLocation('Seattle', 23, 65, 6.3, 0, []);
let storeTokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 0, []);
let storeDubai = new StoreLocation('Dubai', 11, 38, 3.7, 0, []);
let storeParis = new StoreLocation('Paris', 20, 38, 2.3, 0, []);
let storeLima = new StoreLocation('Lima', 2, 16, 4.6, 0, []);

storeSeattle.storeData();
storeTokyo.storeData();
storeDubai.storeData();
storeParis.storeData();
storeLima.storeData();
