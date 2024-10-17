
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import signupReducer from '@/redux/slices/signupSlice';
import medicalHistoryReducer from '../slices/medicalHistorySlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, signupReducer);

export const store = configureStore({
    reducer: {
        signup: persistedReducer,
        medicalHistory: medicalHistoryReducer, // Add the new reducer here
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // Add any other middleware if needed
});

export const persistor = persistStore(store);
