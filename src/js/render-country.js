import Notiflix from 'notiflix';
import countryList from '../templates/country-list.hbs'
import countrySearch from '../templates/country-search.hbs'
import Refs from '../js/refs'

const refs = Refs()

export default function renderCountry(country){
    const markupList = countryList(country)
    const markupCountry = countrySearch(country)
    if(country.length >10){
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
        refs.infoRef.innerHTML = '';
        refs.ulRef.innerHTML=''
    } 
    if(country.length > 1 && country.length < 10 ){
        refs.ulRef.innerHTML = markupList;
        refs.infoRef.innerHTML = '';
    } else if(country.length === 1){
        refs.infoRef.innerHTML=markupCountry;
        refs.ulRef.innerHTML=''
    }  
}
