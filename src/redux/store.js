import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const contactPersistedReducer = persistReducer(persistConfig, contactsReducer);
const filterPersistedReducer = persistReducer(persistConfig, filterReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filter: filterPersistedReducer,
  },
});

export const persistor = persistStore(store);
