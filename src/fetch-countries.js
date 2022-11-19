export default class CoutnryApiServices {
  constructor() {
    this.searchQuery = '';
  }
  fetchCountries() {
    const homeUrl = 'https://restcountries.com/v3.1/';
    const settingsRequest = 'name,capital,languages,population,flags';

    return fetch(`${homeUrl}name/${this.searchQuery}?fields=${settingsRequest}`)
      .then(response => response.json())
      .then(arrayCountries => {
        return arrayCountries;
      })
      .catch(error => {
        console.log('Ошибка');
      });
  }

  get nameSearch() {
    return this.searchQuery;
  }

  set nameSearch(newName) {
    this.searchQuery = newName;
  }
}
