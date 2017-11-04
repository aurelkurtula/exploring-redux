import { 
  cartElem, 
  insertShopDOM, 
  insertCartDOM
} from './functions';
import './App.min.css'
import store from './store'

// Initially, the store contains the shop items,
// Here we loop over them and `insertShopDOM` simply injects the data on the page
// something is expected to be returned, to avoid the warning showing up, we return null
store.getState().shop.map((data) => {
  insertShopDOM(data)
  return null;
})

// As covered in the tutorial, this code block runs on store update
const totalDom = document.querySelector('.total');
store.subscribe( () => {
  cartElem.innerHTML = '';
  let total = 0;
// Loop through the `basket`, inset the data to the DOM
// Also loop calculate the total. `total` is instantiated outside the loop
// Within the loop every price is added with the previous
  store.getState().basket.map((data) => {
    insertCartDOM(cartElem, data)
    total+= Number(data.price*data.qty);
  });
// If we remove all items from `basket` the array would not have a length. 
// In that the case, the total should be 0
  if(!store.getState().basket.length) total = 0;
  totalDom.innerHTML = 'Total: £'+ total.toFixed(2);
})



