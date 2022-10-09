export function prewiewMarkup({ flags, name }) {
    return `
        <li class="country-list__item">
        <img class="country-list__flag" width="30px" height="20px" src="${flags.svg}"></img>
        <p class="country-list__name">${name.official}</p>
        </li>`;
}
export function countryMarkup({name, capital, population, flags, languages}) {
    const сountriesLang = Object.values(languages).join(',');
        return `
        <div>
        <img width="60px" height="40px" src="${flags.svg}"></img>
        <p>${name.official}</p></div>
        <d>Capital: <span>${capital}</span><p>
        <p>Population: <span>${population}</span></p>
        <p>Languages: <span>${сountriesLang}</span></p>
        </div>`;
};
