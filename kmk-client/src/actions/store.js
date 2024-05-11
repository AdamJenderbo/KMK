// import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers/rootReducer'

// export const store = createStore(rootReducer);


import { configureStore } from '@reduxjs/toolkit'

import authenticationReducer from '../reducers/authenticationReducer'
import userReducer from '../reducers/userReducer'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer
  }
})