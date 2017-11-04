import store from './store';
import {addToCardEvent, removeFromCardEvent} from './Actions';
 export const cartElem = document.querySelector('#cardItems');
 const shopElem = document.querySelector('#store');

export function insertShopDOM(data) {
// This is just JavaScript, injecting the data to the page  
  let {id, title, price, img} = data;
  let item = document.createElement("div");
  item.className = "box";
  item.setAttribute('data-id', id);
  let imgEl = document.createElement("img");
  imgEl.src = img;
  item.appendChild(imgEl);
  let meta = document.createElement("div");
  meta.className = "meta";
  item.appendChild(meta);
  let h2 = document.createElement("h2");
  h2.innerHTML = title;
  let p = document.createElement("p");
  p.innerHTML = '£'
  let span = document.createElement("span");
  span.innerHTML = price;
  p.appendChild(span);
  meta.appendChild(h2);
  meta.appendChild(p);
  item.appendChild(meta);

// I decided to have the Event listener and the redux action in one function
// When using React or other frameworks, the code will be cleaner.
// The main take away - each book item is going to get a click event
  addToCardEvent(item, store, {id, title, price, img})
// Each item get's appended to the html id defined at the top of the page
  shopElem.appendChild(item)
}

export function insertCartDOM(node, data) {
let  { id, title, price, img,qty } = data;
// This is just JavaScript, injecting the data to the page  
// This is the HTML which get's inserted in the basket afte `addToCardEvent` runs
  let item = document.createElement("div");
  let titleNode = document.createElement("p");
  item.setAttribute('data-id', id);
    let titleTextNode = document.createTextNode(`${title}`);
        titleNode.appendChild(titleTextNode);

  let priceNode = document.createElement("span");
    let priceTextNode = document.createTextNode(`$${(price*qty).toFixed(2)} (qty:${qty})`);
        priceNode.appendChild(priceTextNode);

  let deleteNode = document.createElement("span");
    let deleteTextNode = document.createTextNode('x');
        deleteNode.appendChild(deleteTextNode);
    deleteNode.className="delete"    
  let imgNode = document.createElement("img");
    imgNode.src = img;     
  titleNode.appendChild(priceNode)
  item.appendChild(imgNode)
  item.appendChild(titleNode)
  item.appendChild(deleteNode)
// Another event, now to remove items
  removeFromCardEvent(item, id, store)
  node.append(item)
}
