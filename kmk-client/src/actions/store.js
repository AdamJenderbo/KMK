// import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers/rootReducer'

// export const store = createStore(rootReducer);


import { configureStore } from '@reduxjs/toolkit'

import arrangementReducer from '../reducers/arrangementReducer'
import authenticationReducer from '../reducers/authenticationReducer'
import userReducer from '../reducers/userReducer'

export const store = configureStore({
	reducer: {
		arrangement: arrangementReducer,
		authentication: authenticationReducer,
		user: userReducer
	}
})