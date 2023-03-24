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
    //adding out total cookies per store
    this.totalDailyCookies += this.cookieTotal[i];
    let storeCell = document.createElement('td');
    storeCell.textContent = this.cookieTotal[i];
    storeRow.appendChild(storeCell);
  }
  let storeTotalDailyCookies = document.createElement('td');
  storeTotalDailyCookies.textContent = this.totalDailyCookies;
  storeRow.appendChild(storeTotalDailyCookies);


  // console.log(this.cookieTotal);
};

StoreLocation.prototype.renderFooter = function(){
  let tFoot = document.getElementById('tableFooter');
  console.log('🚀 ~ file: app.js:69 ~ tFoot:', tFoot);
  let footerRow = document.createElement('tr');
  let totalId = document.createElement('th');
  totalId.textContent = 'Total';
  footerRow.appendChild(totalId);

  let grandTotal = 0;

  for(let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;
    //go through the cities
    console.log(allStores);
    for(let j = 0; j < allStores.length; j++){
      // console.log(allStores[j].cookieTotal[i]);
      //add to my hourly  total the city total for that hour.
      //we have two variable i and j, that are arrays.
      //so go to the citys array and find the number for how many allStores[] which will have Seattl.... and we will look at the total for hour
      hourlyTotal = hourlyTotal + allStores[j].cookieTotal[i];
      console.log('🚀 ~ file: app.js:87 ~ hourlyTotal:', hourlyTotal);
      //adding up the grand total


    }
    grandTotal += hourlyTotal;
    //get it out to the page appending it
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
  }
  let grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = grandTotal;
  footerRow.appendChild(grandTotalTd);

  tFoot.appendChild(footerRow);

};



function randomCustNum(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}



let storeSeattle = new StoreLocation('Seattle', 23, 65, 6.3, 0, []);
let storeTokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 0, []);
let storeDubai = new StoreLocation('Dubai', 11, 38, 3.7, 0, []);
let storeParis = new StoreLocation('Paris', 20, 38, 2.3, 0, []);
let storeLima = new StoreLocation('Lima', 2, 16, 4.6, 0, []);


let allStores = [storeSeattle,storeTokyo,storeDubai,storeParis,storeLima];

storeSeattle.storeData();
storeTokyo.storeData();
storeDubai.storeData();
storeParis.storeData();
storeLima.storeData();
storeSeattle.renderFooter();

// Add this function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const storeName = document.getElementById("store-name").value;
  const minCust = parseInt(document.getElementById("min-customer").value);
  const maxCust = parseInt(document.getElementById("max-customer").value);
  const avgCookieSale = parseFloat(document.getElementById("avg-cookie-sale").value);

  const newStore = new StoreLocation(storeName, minCust, maxCust, avgCookieSale, 0, []);
  allStores.push(newStore);
  newStore.storeData();

  // Clear the existing footer and re-render it with updated data
  document.getElementById("tableFooter").innerHTML = "";
  newStore.renderFooter();

  // Clear the form input values
  event.target.reset();
}

// Add an event listener to the form
const form = document.querySelector(".data-form");
form.addEventListener("submit", handleFormSubmit);
