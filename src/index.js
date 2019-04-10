import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store , sagaMiddleware} from './createStore';
import { fetchAllBreweries } from './actions/index';
import rootSaga from './sagas';

sagaMiddleware.run(rootSaga);
store.dispatch(fetchAllBreweries());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'),
  );
