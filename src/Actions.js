//Redux allows us to dispatch actions
// `type` is requred to be called `type`. It distaches the name of the action
// `payload` can be called anything, but that's the convention
export function addToCardEvent(item, store, data){
  item.addEventListener('click', e =>{
    store.dispatch({ type: 'ADD_TO_CARD', payload: { ...data, qty: '1' } })
  })
}
export function removeFromCardEvent(item, id,store){
  item.addEventListener('click', e=>{
    store.dispatch({ type: 'REMOVE_FROM_CARD', payload: { id } })
  })
}