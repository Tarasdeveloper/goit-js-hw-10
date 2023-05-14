import Notiflix from 'notiflix';
export const refs = {
  inputRef: document.querySelector('#search-box'),
  countryListRef: document.querySelector('.country-list'),
  countryInfoRef: document.querySelector('.country-info'),
};

export function makeMarkup(value) {
  if (value.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (value.length >= 2 && value.length <= 10) {
    const markup = value
      .map(
        elem =>
          `
            <li class="list-item">
                <img src="${elem.flags.svg}" width="40px">
                <span>${elem.name.official}</span>
            </li>
        `
      )
      .join('');
    refs.countryListRef.insertAdjacentHTML('beforeend', markup);
  }

  if (value.length === 1) {
    const markup = value
      .map(
        elem =>
          `
                <div>
                    <div class="countryflag">
                      <img src="${elem.flags.svg}" width="40px">
                      <h1 class="country-name">${elem.name.official}</h1>
                    </div>
                    <p>Capital: ${elem.capital}</p>
                    <p>Population: ${elem.population}</p>
                    <p>Languages: ${Object.values(elem.languages)
                      .map(elem => elem)
                      .join(', ')}</p>
                </div>
            `
      )
      .join('');
    refs.countryInfoRef.insertAdjacentHTML('beforeend', markup);
  }
}
