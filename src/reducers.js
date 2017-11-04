import { combineReducers  } from 'redux'; 
// shop.js just as an array object containing 6 books.
import storeInitState from './shop';
const cartInitState = [];


const storeReducer = (state=storeInitState, action) => {
// For this demo, we aren't doing much with the store front.
// We simply return books
// NOTE: I read that we should inclue this if statement as the first time
// the code rund, the state is undefined (not sure)  
  if(state === undefined){
    return state;
  }
  return state;
}
const basketReducer = (state=cartInitState, action) => {
// A switch statement would have been better, but ... :)  
  if(state === undefined){
    return state;
  }
// Checking if the action is the one we need
  if(action.type === 'ADD_TO_CARD'){
    const data = action.payload;
// This is different to the tutorial.
// Checking if use is trying to add the same book
    const duplicateCheck = state.filter(book => data.id === book.id )
// If lengths is 0, just return a new version of the state, including the new book    
     if(duplicateCheck.length === 0){
      const newState = [ ...state, data ];
      return newState;
     } else{
// If the book is already in the baket (1) create a new state array. 
// (2) Map through it. (3) stop if the state id is the same as the action.payload.id. 
// (4) add 1 to the current quantity       
      const newState = [...state].map(book =>{
        if(book.id === data.id){
           book.qty = Number(book.qty) + 1;
        }
        return book
      })
      return newState
     }
  }  
// Checking if the action is the one we need. 
// Here, we do the reverse of the above
  if(action.type ==="REMOVE_FROM_CARD"){
    return  [...state].filter(book => {
      // the quantity is more than one
      if(action.payload.id === book.id && book.qty > 1){
      // lower the count.
          book.qty--;
          return book;
      }else{
        // Else (if the count is 1, that is), return all the books except the one selected 
        return book.id != action.payload.id;
      }
    })
    // Note the immutability achieved by spreading the state array ~ [...state]
  }
  return state;
}

// As covered on the tutorial, We combine the above reducers and make them available for the store (./store.js)
export default combineReducers({
  basket: basketReducer,
  shop: storeReducer
})