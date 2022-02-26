import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './pages/home';
import { store } from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
