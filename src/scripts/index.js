import '../css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { makeMarkup, refs } from './makeMarkup.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// import {  } from './makeMarkup.js';

const DEBOUNCE_DELAY = 300;

refs.inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  let searchCountry = event.target.value.trim();
  refs.countryInfoRef.innerHTML = '';
  refs.countryListRef.innerHTML = '';

  if (searchCountry) {
    fetchCountries(searchCountry)
      .then(makeMarkup)
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }
}
