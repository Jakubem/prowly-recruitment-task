const person = require('./utils').person;
const listItem = require('./utils').listItem;
const filterPeople = require('./utils').filterPeople;

// create empty array for people
const people = [];

// push some individuals into people array
for (i=0; i < 6; i++) {
  people.push(person());
}

// list for expected search output
const resultList = document.querySelector('.search__list');

// search input
const searchInput = document.querySelector('.search__input');

// on keyup perform search function
searchInput.addEventListener('keyup', () => {
  // create empty array for future results
  let filteredPeople = [];
  // if the input is not empty filter persons array with user query
  if (searchInput.value !== '') {
    filteredPeople = people.filter((obj) => {
      return filterPeople(obj, searchInput.value.toLowerCase());
    })
  }
  // create empty output for search
  let searchresult = '';
  // fill searchresult with search results :)
  searchresult += filteredPeople.map(el => listItem(el.name, el.role, el.avatar)).join('');
  // put search results into appropriate HTML element
  resultList.innerHTML = searchresult;
})