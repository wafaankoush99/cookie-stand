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



};



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



};




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



};







const Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
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



};


function getRandomArbitrary( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

seattle.getCustomer();
seattle.getSales();
seattle.render();
console.log( seattle );


Tokyo.getCustomer();
Tokyo.getSales();
Tokyo.render();
console.log( Tokyo );


Dubai.getCustomer();
console.log( Dubai.customerPerHour );
Dubai.getSales();
Dubai.render();
console.log( Dubai );



Paris.getCustomer();
Paris.getSales();
Paris.render();
console.log( Paris );

Lima.getCustomer();
Lima.getSales();
Lima.render();
console.log( Lima );



