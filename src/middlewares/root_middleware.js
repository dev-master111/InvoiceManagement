import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware,
);

export default RootMiddleware;
