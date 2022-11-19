import Notiflix from 'notiflix';

export default class CoutnryApiServices {
  constructor() {
    this.searchQuery = '';
  }
  fetchCountries() {
    const homeUrl = 'https://restcountries.com/v3.1/';
    const settingsRequest = 'name,capital,languages,population,flags';

    return fetch(`${homeUrl}name/${this.searchQuery}?fields=${settingsRequest}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(arrayCountries => {
        if (arrayCountries.length < 10) {
          return arrayCountries;
        }
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }

  get nameSearch() {
    return this.searchQuery;
  }

  set nameSearch(newName) {
    this.searchQuery = newName.trim();
  }
}
