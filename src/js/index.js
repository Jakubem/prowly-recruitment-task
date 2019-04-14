const person = require('./utils').person;
const listItem = require('./utils').listItem;
const filterPeople = require('./utils').filterPeople;

// create example people array
const people = [
  person(),
  person(),
  person(),
  person(),
  person(),
  person(),
]

const resultList = document.querySelector('.search__list');

const searchInput = document.querySelector('.search__input');

searchInput.addEventListener('keyup', () => {
  let filteredPeople = [];
  if (searchInput.value !== '') {
    filteredPeople = people.filter((obj) => {
      return filterPeople(obj, searchInput.value.toLowerCase());
    })
  }
  let searchresult = '';
  filteredPeople.forEach(el => {
    searchresult += listItem(el.name, el.role, el.avatar);
  })
  resultList.innerHTML = searchresult;
})