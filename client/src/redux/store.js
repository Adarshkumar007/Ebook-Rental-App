import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index'; // assuming you have a root reducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, and other configuration here if needed
});

export default store;
