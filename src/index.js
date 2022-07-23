import './css/styles.css';
import Refs from './js/refs'
import { debounce } from "debounce";
import checkEmptyString from './js/check-empty-string'


const DEBOUNCE_DELAY = 500;
const refs = Refs()

const debounceHandleInput = debounce(event => checkEmptyString(event), DEBOUNCE_DELAY)

export default refs.inputRef.addEventListener('input', debounceHandleInput);

