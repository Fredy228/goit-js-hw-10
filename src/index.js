import './css/styles.css';
import CoutnryApiServices from './fetch-countries';

const refs = {
  inputText: document.querySelector('#search-box'),
  countryListHTML: document.querySelector('.country-list'),
  countryInfoHTML: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');
const coutnryApiServices = new CoutnryApiServices();

refs.inputText.addEventListener('input', debounce(searchCountries, 300));

function searchCountries() {
  const nameCountries = refs.inputText.value;

  if (refs.inputText.value !== '') {
    coutnryApiServices.nameSearch = nameCountries;
    coutnryApiServices
      .fetchCountries()
      .then(arrayCountries => console.log(arrayCountries));
  }
}
