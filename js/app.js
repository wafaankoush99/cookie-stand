'use strict';

let hour =  ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'];

// Country function has these parameters ( name, min, max, avg, avgCookie )

function Country ( name, min, max, avg ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSales = [];
  this.customerPerHour=[];

  this.totalSales = 0;
  this.totalOfTotal= 0;
  //this.avgCookie = avgCookie;
  Country.allCountry.push( this );
}




Country.prototype.getSales = function () {
  for ( let i=0; i<hour.length; i++ ) {
    let cookie = Math.ceil( ( getRandomNumber ( this.min, this.max ) * this.avg ) );
    this.cookiesSales.push( cookie );
    this.totalSales += cookie;
    this.customerPerHour.push( cookie );


  }
};

Country.prototype.print = function () {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for ( let i=0 ; i< hour.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.cookiesSales[i];
  }

  const td4 = document.createElement( 'td' );
  tr.appendChild( td4 );
  td4.textContent = this.totalSales;


};



const tableHeader = function() {
  const parentElement = document.getElementById( 'shops' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'placeTable' );
  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );

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

  //console.log( formElement );

  // two argument the second is for function
  // function declared in the event listener

};



tableHeader();

Country.allCountry = [];



const seattle = new Country ( 'Seattle', 23, 65, 6.3 );
seattle.getSales();
seattle.print();
console.log( seattle );


const tokyo = new Country ( 'Tokyo', 3, 14, 1.2 );
tokyo.getSales();
tokyo.print();
console.log( tokyo );

const dubai = new Country ( 'Dubai', 11, 38, 3.7 );
dubai.getSales();
dubai.print();
console.log( dubai );

const paris = new Country ( 'Paris', 20, 38, 2.3 );
paris.getSales();
paris.print();
console.log( paris );

const lima = new Country ( 'Lima', 2, 16, 4.6 );
lima.getSales();
lima.print();
console.log( lima );







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

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales;
};

tableFooter();







function getRandomNumber ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 )+ min );
}



const formElement = document.getElementById( 'AddNewBranch' );
formElement.addEventListener( 'submit', function( event ) {
  event.preventDefault();
  const name = event.target.branch_Name.value;
  const min = event.target.minNum_Cust.value;
  const max = event.target.maxNum_Cust.value;
  const avg = event.target.avg_Num.value;
  if ( Number( min ) >= Number( max ) ){
    alert( 'Invalid maximum number !! ' );
  }
  else{
    document.getElementById( 'placeTable' ).removeChild( document.getElementById( 'placeTable' ).lastChild );
    const city = new Country ( name, min, max, avg );
    formElement.reset();
    console.log( city.customerPerHour );

    city.getSales();
    city.print();


    tableFooter();
  }

} );
