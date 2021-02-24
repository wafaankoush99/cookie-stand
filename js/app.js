'use strict';

let hour = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'];


const seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSales: [],
  customerPerHour: [],//[54, 676, 778,........., 17];
  totalSales: 0,
  getSales: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let cookie = Math.ceil( this.customerPerHour[i] * this.avg );
      this.cookiesSales.push( cookie );
      this.totalSales += cookie;

    }
  },


  getCustomer: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let customer = getRandomArbitrary( this.min, this.max );
      this.customerPerHour.push( customer );
    }

  },

  render: function () {

    const parentElement = document.getElementById( 'shops' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for ( let i = 0; i < hour.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalSales} cookies.`;

  },




function Sale ( name, min, max, avg, avgCookie ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSales = [];
  this.totalSales = 0;
  this.avgCookie = avgCookie;
}

Sale.prototype.getSales = function () {
  for ( let i=0; i<hour.length; i++ ) {
    let cookie = Math.ceil( ( getRandomNumber ( this.min, this.max ) * this.avg ) );
    this.cookiesSales.push( cookie );
    this.totalSales += cookie;
  }
};


const Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSales: [],
  customerPerHour: [],
  totalSales: 0,
  getSales: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let cookie = Math.ceil( this.customerPerHour[i] * this.avg );
      this.cookiesSales.push( cookie );
      this.totalSales += cookie;

    }
  },


  getCustomer: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let customer = getRandomArbitrary( this.min, this.max );
      this.customerPerHour.push( customer );
    }

  },

  render: function () {

    const parentElement = document.getElementById( 'shops' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for ( let i = 0; i < hour.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalSales} cookies.`;

  },

Sale.prototype.render = function () {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );


  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for ( let i=0 ; i< hour.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = '   ' + this.cookiesSales[i];
  }

  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.totalSales;
};

const tableHeader = function() {
  const parentElement = document.getElementById( 'shops' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'placeTable' );

  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );


const Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSales: [],
  customerPerHour: [],
  totalSales: 0,
  getSales: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let cookie = Math.ceil( this.customerPerHour[i] * this.avg );
      this.cookiesSales.push( cookie );
      this.totalSales += cookie;

    }
  },


  getCustomer: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let customer = getRandomArbitrary( this.min, this.max );
      this.customerPerHour.push( customer );
    }

  },

  render: function () {

    const parentElement = document.getElementById( 'shops' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for ( let i = 0; i < hour.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalSales} cookies.`;

  },

  
  const th1 = document.createElement( 'th' );
  tr1.appendChild( th1 );
  th1.textContent = 'location';


  for( let i=0; i<hour.length ; i++ ) {
    const th2 = document.createElement( 'th' );
    tr1.appendChild( th2 );
    th2.textContent = hour[i];
  }

  const th3 = document.createElement( 'th' );
  tr1.appendChild( th3 );
  th3.textContent = 'Total of Totals';
};
tableHeader();

const seattle = new Sale ( 'Seattle', 23, 65, 6.3 );
seattle.getSales();
seattle.render();
console.log( seattle );

const tokyo = new Sale ( 'Tokyo', 3, 14, 1.2 );
tokyo.getSales();
tokyo.render();
console.log( tokyo );

const dubai = new Sale ( 'Dubai', 11, 38, 3.7 );
dubai.getSales();
dubai.render();
console.log( dubai );


const Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSales: [],
  customerPerHour: [],
  totalSales: 0,
  getSales: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let cookie = Math.ceil( this.customerPerHour[i] * this.avg );
      this.cookiesSales.push( cookie );
      this.totalSales += cookie;

    }
  },


  getCustomer: function () {
    for ( let i = 0; i < hour.length; i++ ) {
      let customer = getRandomArbitrary( this.min, this.max );
      this.customerPerHour.push( customer );
    }

const paris = new Sale ( 'Paris', 20, 38, 2.3 );
paris.getSales();
paris.render();
console.log( paris );


const lima = new Sale ( 'Lima', 2, 16, 4.6 );
lima.getSales();
lima.render();
console.log( lima );

function getRandomNumber ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 )+ min );
}

const tableFooter = function() {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'total';

  for ( let i=0; i<hour.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );
    th2.textContent = seattle.cookiesSales[i] + tokyo.cookiesSales[i] + dubai.cookiesSales[i] + paris.cookiesSales[i] + lima.cookiesSales[i];
  }


    for ( let i = 0; i < hour.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies.`;
    }

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales;
};


tableFooter();




