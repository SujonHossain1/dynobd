import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/rootReducer';

const persistedState = loadState();

const store = createStore(
    rootReducer,persistedState, applyMiddleware(thunk, logger)
);

store.subscribe(() => {
    saveState({
      cart: store.getState().cart,
      wish: store.getState().wish,
      compare: store.getState().compare
    });
  });

export default store;