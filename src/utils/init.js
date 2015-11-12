import configureStore from '../store';
import { initialState } from './initialState';


export default function init() {
  const store = configureStore(initialState);
  return store;
}
