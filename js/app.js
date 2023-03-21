'use strict';
console.log('js connected');

let parentElement = document.getElementById('locations');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let storeSeattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  totalDailyCookies: 0,
  cookieTotal: [],
  // becuse this function has an 'object' that it belongs to, it is referred to as a method.
  cookiesPurchase: function(){
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
    }
  },
  storeData: function (){
    this.cookiesPurchase();
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeDescription = document.createElement('p');
    storeDescription.textContent = 'Seattle';
    article.appendChild(storeDescription);
    let storeSalesList = document.createElement('ul');
    article.appendChild(storeSalesList);
    for (let i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      let storeListItem = document.createElement('li');
      this.totalDailyCookies += storeSeattle.cookieTotal[i];
      storeListItem.textContent = `${hours[i]} : ${storeSeattle.cookieTotal[i]}`;
      storeSalesList.appendChild(storeListItem);
    }
    let storetotalDailyCookies = document.createElement('li');
    storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
    storeSalesList.appendChild(storetotalDailyCookies);

  }
};
storeSeattle.storeData();


let storeTokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  totalDailyCookies: 0,
  cookieTotal: [],
  cookiesPurchase: function() {
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
    }
  },
  storeData: function(){
    this.cookiesPurchase();
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeDescription = document.createElement('p');
    storeDescription.textContent = 'Tokyo';
    article.appendChild(storeDescription);
    let storeSalesList = document.createElement('ul');
    article.appendChild(storeSalesList);
    for (let i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      let storeListItem = document.createElement('li');
      this.totalDailyCookies += storeTokyo.cookieTotal[i];
      storeListItem.textContent = `${hours[i]} : ${storeTokyo.cookieTotal[i]}`;
      storeSalesList.appendChild(storeListItem);
    }
    let storetotalDailyCookies = document.createElement('li');
    storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
    storeSalesList.appendChild(storetotalDailyCookies);

  }

};

storeTokyo.storeData();

let storeDubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  totalDailyCookies: 0,
  cookieTotal: [],
  cookiesPurchase: function() {
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
    }
  },
  storeData: function(){
    this.cookiesPurchase();
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeDescription = document.createElement('p');
    storeDescription.textContent = 'Dubai';
    article.appendChild(storeDescription);
    let storeSalesList = document.createElement('ul');
    article.appendChild(storeSalesList);
    for (let i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      let storeListItem = document.createElement('li');
      this.totalDailyCookies += storeDubai.cookieTotal[i];
      storeListItem.textContent = `${hours[i]} : ${storeDubai.cookieTotal[i]}`;
      storeSalesList.appendChild(storeListItem);
    }
    let storetotalDailyCookies = document.createElement('li');
    storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
    storeSalesList.appendChild(storetotalDailyCookies);

  }

};

storeDubai.storeData();

let storeParis = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  totalDailyCookies: 0,
  cookieTotal: [],
  cookiesPurchase: function() {
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
    }
  },
  storeData: function(){
    this.cookiesPurchase();
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeDescription = document.createElement('p');
    storeDescription.textContent = 'Paris';
    article.appendChild(storeDescription);
    let storeSalesList = document.createElement('ul');
    article.appendChild(storeSalesList);
    for (let i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      let storeListItem = document.createElement('li');
      this.totalDailyCookies += storeParis.cookieTotal[i];
      storeListItem.textContent = `${hours[i]} : ${storeParis.cookieTotal[i]}`;
      storeSalesList.appendChild(storeListItem);
    }
    let storetotalDailyCookies = document.createElement('li');
    storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
    storeSalesList.appendChild(storetotalDailyCookies);

  }

};

storeParis.storeData();

let storeLima = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  totalDailyCookies: 0,
  cookieTotal: [],
  cookiesPurchase: function() {
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      this.cookieTotal[i] = Math.floor(randomCustNum(this.minCust, this.maxCust) * this.avgCookieSale);
    }
  },
  storeData: function(){
    this.cookiesPurchase();
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeDescription = document.createElement('p');
    storeDescription.textContent = 'Lima';
    article.appendChild(storeDescription);
    let storeSalesList = document.createElement('ul');
    article.appendChild(storeSalesList);
    for (let i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      let storeListItem = document.createElement('li');
      this.totalDailyCookies += storeLima.cookieTotal[i];
      storeListItem.textContent = `${hours[i]} : ${storeLima.cookieTotal[i]}`;
      storeSalesList.appendChild(storeListItem);
    }
    let storetotalDailyCookies = document.createElement('li');
    storetotalDailyCookies.textContent = `Total: ${this.totalDailyCookies}`;
    storeSalesList.appendChild(storetotalDailyCookies);

  }

};

storeLima.storeData();

function randomCustNum(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
