import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Countries from './js/fetchCountries';
import {prewiewMarkup, countryMarkup} from './js/countryMarkup';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputCountSearch = document.querySelector("#search-box");
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const clearMarkup = () => {
    countryList.textContent = '';
    countryInfo.textContent = '';
};

inputCountSearch.addEventListener("input", debounce(countSearch, DEBOUNCE_DELAY));


function countSearch(event) {
    clearMarkup();
    const country = event.target.value.trim().toLowerCase();
    
    if ((!country && !event.data) || (!country && event.data === '')) {
        return;
    } else {
        Countries(country)

.then(data => {
    if (data.length === 1) {
        singleCountry(data);
    } else if (data.length >= 2 && data.length <= 10) {
        renderCountry(data);
    } else {
        Notify.info(
        'Too many matches found. Please enter a more specific name.'
    );
    }
})
    .catch(error => {
    Notify.failure('Oops, there is no country with that name')
    console.log(error.message);
});
}
}

function renderCountry(list) {
    const markup = list.map(prewiewMarkup).join('');
    countryList.innerHTML = markup;
};

    function singleCountry(country) {
    const markup = country.map(countryMarkup).join('');
    countryInfo.innerHTML = markup;
}