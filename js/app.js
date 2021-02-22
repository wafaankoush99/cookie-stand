'use strict';

let dayHours =  ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'];


let seattle = {
  country: 'Seattle',
  minCustomers:23,
  maxCustomers:65,
  avgCookiesSale: 6.3,
  customers: 0,
  cookiesNumber:0,
  totalCookies:0,
  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },
  hourWorks: function (randomNumber,multiply) {
    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiply);
  }
};

renderObjects(seattle);




let tokyo = {
  country: 'Tokyo',
  minCustomers:3,
  maxCustomers:24,
  avgCookiesSale: 1.2,
  customers: 0,
  cookiesNumber:0,
  totalCookies:0,
  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },
  hourWorks: function (randomNumber,multiplyNumber) {
    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

renderObjects(tokyo);

let dubai = {
  country: 'Dubai',
  minCustomers:11,
  maxCustomers:38,
  avgCookiesSale: 3.7,
  customers: 0,
  cookiesNumber:0,
  totalCookies:0,
  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },
  hourWorks: function (randomNumber,multiplyNumber) {
    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};
renderObjects(dubai);





let paris = {
  country: 'Paris',
  minCustomers:20,
  maxCustomers:38,
  avgCookiesSale: 2.3,
  customers: 0,
  cookiesNumber:0,
  totalCookies:0,
  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },
  hourWorks: function (randomNumber,multiplyNumber) {
    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

renderObjects(paris);




let lima = {
  country: 'Lima',
  minCustomers:2,
  maxCustomers:16,
  avgCookiesSale: 4.6,
  customers: 0,
  cookiesNumber:0,
  totalCookies:0,
  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },
  hourWorks: function (randomNumber,multiplyNumber) {
    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};


renderObjects(lima);






function renderObjects(objectName){
  let parentElement = document.getElementById('Salmon Sales');
  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);
  let h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent = objectName.country;
  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);



  for(let i = 0; i < dayHours.length; i++) {
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    objectName.customersNumber(objectName.minCustomers,objectName.maxCustomers);
    objectName.hourWorks(objectName.customers,objectName.avgCookiesSale);
    liElement.textContent = `${dayHours[i]} ----> ${objectName.cookiesNumber} Cookie.`;
    objectName.totalCookies = objectName.totalCookies + objectName.cookiesNumber;
    objectName.customers = 0;
    objectName.cookiesNumber = 0;
  }



  let liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent = `Total: ${objectName.totalCookies} Cookie.`;
}














function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function calculateCookiesNumber (randomNumber,multiply){
  randomNumber = randomNumber*multiply;
  return Math.ceil(randomNumber);
}











