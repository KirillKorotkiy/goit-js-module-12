import Notiflix from 'notiflix';

export default function checkValid (response) {
    if(response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        Notiflix.Notify.failure("Oops, there is no country with that name")
        throw error
    }
}