import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';
import App from './App';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
