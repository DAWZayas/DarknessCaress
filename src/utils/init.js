import configureStore from '../store';
import { initialState } from './exports';


export default function init() {
  const store = configureStore(initialState);
  return store;
}
