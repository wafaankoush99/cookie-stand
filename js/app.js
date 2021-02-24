'use strict';

let hour =  ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'];


function Country ( name, min, max, avg, avgCookie ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSales = [];
  this.totalSales = 0;
  this.avgCookie = avgCookie;
  Country.allCountry.push( this );
}

Country.prototype.getSales = function () {
  for ( let i=0; i<hour.length; i++ ) {
    let cookie = Math.ceil( ( getRandomNumber ( this.min, this.max ) * this.avg ) );
    this.cookiesSales.push( cookie );
    this.totalSales += cookie;
  }
};

Country.prototype.render = function () {
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
seattle.render();
console.log( seattle );

const tokyo = new Country ( 'Tokyo', 3, 14, 1.2 );
tokyo.getSales();
tokyo.render();
console.log( tokyo );

const dubai = new Country ( 'Dubai', 11, 38, 3.7 );
dubai.getSales();
dubai.render();
console.log( dubai );

const paris = new Country ( 'Paris', 20, 38, 2.3 );
paris.getSales();
paris.render();
console.log( paris );

const lima = new Country ( 'Lima', 2, 16, 4.6 );
lima.getSales();
lima.render();
console.log( lima );





// const tableFooter = function() {
//   const tableElement = document.getElementById( 'placeTable' );

//   const tr = document.createElement( 'tr' );
//   tableElement.appendChild( tr );

//   const th1 = document.createElement( 'th' );
//   tr.appendChild( th1 );
//   th1.textContent = 'total';


const addNewBranch = function() {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const td = document.createElement( 'td' );
  tr.appendChild( td );
  td.textContent = this;
};

const formElement = document.getElementById( 'AddNewBranch' );


formElement.addEventListener( 'submit' , function( event ) {
  event.preventDefault();



  const branchName = event.target.branchName.value;
  const minNumCus = event.target.minNumCus.value;
  const maxNumCust = event.target.maxNumCust.value;
  const avgNum = event.target.avgNum.value;
  //we use 'value' for the box & 'checked' for checkbox
  //split(''); ---> take the string as it is
  //prevent default action



  const country = new Country ( branchName, minNumCus, maxNumCust, avgNum );





  country.getSales();
  country.render();

  // branchName.render();
  // minNumCus.render();
  // maxNumCust.render();
  // avgNum.render();
  // console.log( branchName );
  // console.log( minNumCus );
  // console.log( maxNumCust );
  // console.log( avgNum );


  //console.log( event.target.branchName.value );
  console.log( Country.allCountry );

  formElement.reset();

//console.log( 'submit' );
} );


addNewBranch();



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


