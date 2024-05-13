import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
const store = createStore(uiReducer, Map(initialState), reduxExtension(applyMiddleware(thunk)));
ReactDOM.render(
	<React.StrictMode>
	<Provider store={store}>
	  <App />
	</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
