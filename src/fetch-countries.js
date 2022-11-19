export default class CoutnryApiServices {
  constructor(name) {
    this.name = name;
  }
  fetchCountries() {
    const homeUrl = 'https://restcountries.com/v3.1/';
    const settingsRequest = 'name,capital,languages,population,flags';

    fetch(`${homeUrl}name/${this.name}?fields=${settingsRequest}`)
      .then(response => response.json())
      .then(arrayCoutnries => {
        for (const objCountry of arrayCoutnries) {
          console.log(objCountry);
        }
      });
  }
}
