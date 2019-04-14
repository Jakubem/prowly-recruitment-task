const faker = require('faker');

/**
 * Create fake person object using faker
 */
export function person() {
  const person = {
    name: faker.name.findName(),
    role: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  }
  return person
}


/**
 * render list item from filtered people
 * @param {str} name person's name
 * @param {str} role - person's job title
 * @param {str} avatar - person's avatar
 */
export function listItem(name, role, avatar) {
  return `
    <li class="search__list-item">
      <img src="${avatar}" alt="" class="search__list-img"></img>
      <a href="/${encodeURIComponent(name)}" class="search__list-person">
        <p class="search__list-name">
          ${name}
        </p>
        <p class="search__list-role">
          ${role}
        </p>
      </a>
    </li>
  `
};


/**
 * 
 * @param {obj} obj - person object to be filtered
 * @param {*} query - filter query
 */
export function filterPeople(obj, query) {
  return obj.name
    .trim()
    .toLowerCase()
    .includes(query)
}