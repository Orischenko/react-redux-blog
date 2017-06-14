import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

//not from prod
window.store = store;

export default store;