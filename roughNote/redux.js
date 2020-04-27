import { createStore } from 'redux';

// Reducers Starts
const defaultState = {
  city: 'chennai',
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ADD_NAME': return { ...state, name: actions.payload, updatedAt: actions.time };
    case 'ADD_AGE': return { age: actions.payload, updatedAt: actions.time };
    default: return state;
  }
};
// Reducer Ends

// Create Store
const store = createStore(reducer);

// Get Store Data and Display in Console.Log
console.log(store.getState());


// Action 1
store.dispatch({
  type: 'ADD_NAME',
  payload: 'Sudarsan',
});

console.log(store.getState());

// Action 2
store.dispatch({
  type: 'ADD_AGE',
  payload: 23,
  time: '12345',
});

console.log(store.getState());
