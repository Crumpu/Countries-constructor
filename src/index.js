'use strict';

function Country(
  title,
  capital,
  population = '1 million ',
  area = '200 000km2'
) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCountry = function () {
    return `title = ${title}, capital = ${capital}, population = ${population}, area = ${area}`;
  };
}

const USA = new Country('USA', 'Washington', '331.9 million', '9 834 000 km2');

const Japan = new Country('Japan', 'Tokyo', '125.7 million', '377 973 km2');

console.log(Japan.showCountry());


function funcCountry(countryObject) {
  for (let key in countryObject) {
    if (typeof countryObject[key] === 'string') {
      console.log(`${key}: ${countryObject[key]}`);
    }
  }
}
funcCountry(USA);
