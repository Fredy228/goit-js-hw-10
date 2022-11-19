import './css/styles.css';
import CoutnryApiServices from './fetch-countries';
const refs = {
  inputText: document.querySelector('#search-box'),
  countryListHTML: document.querySelector('.country-list'),
  countryInfoHTML: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.inputText.addEventListener('input', searchCountries);

function searchCountries() {
  const nameCountries = refs.inputText.value;

  if (refs.inputText.value !== '') {
    new CoutnryApiServices(nameCountries).fetchCountries();
  }
}
