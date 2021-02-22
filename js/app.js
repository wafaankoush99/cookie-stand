

'use strict';

let hour =  ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'];


function Sale ( name, min, max, avg ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSales = [];
  this.customerPerHour = [];
  this.totalSales = 0;


  Sale.prototype.getSales = function () {
    for ( let i=0; i<hour.length; i++ ) {
      let cookie = Math.ceil( ( getRandomNumber ( this.min, this.max ) * this.avg ) );
      this.cookiesSales.push( cookie );
      this.totalSales += cookie;

    }

  };

  Sale.prototype.getCustomer = function () {
    for ( let i=0; i<hour.length; i++ ) {
      let customer = getRandomNumber ( this.min, this.max );
      this.customerPerHour.push( customer );


    }
  };


  Sale.prototype.render = function () {

    const parentElement = document.getElementById( 'shops' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = `${this.name}`;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for ( let i=0; i<hour.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent= `${hour[i]}:${this.cookiesSales[i]} cookies.`;
    }


    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalSales} cookies.`;


  };

}







const seattle = new Sale ( 'Seattle', 23, 65, 6.3 );
seattle.getSales();
seattle.getCustomer();
seattle.render();
console.log( seattle );

const tokyo = new Sale ( 'Tokyo', 3, 14, 1.2 );
tokyo.getSales();
tokyo.getCustomer();
tokyo.render();
console.log( tokyo );
const dubai = new Sale ( 'Dubai', 11, 38, 3.7 );
dubai.getSales();
dubai.getCustomer();
dubai.render();
console.log( dubai );
const paris = new Sale ( 'Paris', 20, 38, 2.3 );
paris.getSales();
paris.getCustomer();
paris.render();
console.log( paris );
const lima = new Sale ( 'Lima', 2, 16, 4.6 );
lima.getSales();
lima.getCustomer();
lima.render();
console.log( lima );






function getRandomNumber ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 )+ min );

}

