import event from '../index';
import {fetchCountries} from './fetchCountries'
import Notiflix from 'notiflix';
import Refs from './refs'

const refs = Refs()

export default function checkEmptyString(event){
    if(event.target.value === '') {
        refs.infoRef.innerHTML = '';
        refs.ulRef.innerHTML=''
        Notiflix.Notify.info('Input country name')
       } else {   
        fetchCountries(event)
      }
}