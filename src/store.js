import { createStore, compose } from 'redux';
import reducers from './reducers.js'

// The store is created with `createStore`, 
// It requires reducer, pre-loaded state, and enhancers
// reducers = from './reducers.js'
// We do not need pre-loaded state
// The hencancer we are using is to communicate/work with redux extention

export default createStore(reducers, undefined,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
// Extention information can be found at: 
// https://github.com/zalmoxisus/redux-devtools-extension