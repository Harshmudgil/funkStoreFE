import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import thunk from 'redux-thunk';
import 
{ persistReducer, 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

 import storage from 'redux-persist/lib/storage';

 const persistConfig = {
    key: 'root',
    version:1,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, cartReducer)

  export const store = configureStore({
    reducer: {cart : persistedReducer},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  })

export let persistor = persistStore(store);