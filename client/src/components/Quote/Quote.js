import React from 'react';
import { Provider } from 'react-redux';
import FormContainer from './forms/form.container';
import configureStore from '../../modules/store';

const store = configureStore();
// Quote suppose to be a Class i will return alot of stuff
const Quote = () => {
	return (
		<Provider store={store}>
			<FormContainer store={store} />
		</Provider>
	);
};

export default Quote;
