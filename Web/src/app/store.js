import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from '../reducers/AuthSlice';
import counterReducer from '../features/counter/counterSlice';
import childProfileReducer from '../reducers/ChildProfileSlice';
import doonorProfileReducer from '../reducers/DonorProfileSlice';
import TourProfileSlice from '../reducers/TourProfileSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  count: counterReducer,
  authentication: authReducer,
  childProfile: childProfileReducer,
  donorProfile: doonorProfileReducer,
  TourSlice: TourProfileSlice
});

const _persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

export const persistor = persistStore(store)