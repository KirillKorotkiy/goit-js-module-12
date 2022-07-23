import event from '../index';
import checkValid from './check-valid';
import renderCountry from './render-country';

export function fetchCountries (event) {
    const countryForSearch = event.target.value;
    return    fetch(`https://restcountries.com/v2/name/${countryForSearch.trim()}?fields=capital,population,languages,flags,name`)
    .then(response => checkValid(response))
    .then(response =>{
        return response.json()
    })
    .then(renderCountry)
    .catch(error =>{
        console.log(error)
    })
    }