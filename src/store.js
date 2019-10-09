import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import RootMiddleware from './middlewares/root_middleware';

export const store = createStore(
  allReducers,
  composeWithDevTools(RootMiddleware)
);
