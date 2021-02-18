import { createStore, combineReducers } from 'redux';
import CampsiteInfo from '../components/CampsiteInfoComponent';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
   const store = createStore(
       combineReducers({
           campsites: Campsites,
           comments: Comments,
           partners: Partners,
           promotions: Promotions
       })
   );

   return store;
};