import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const initState = {
//   cart: [],
// };

//action
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

//reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    // state.cart = [...state.cart, action.payload];
    // state.cart.push(action.payload); //Digunakan bila ada banyak state
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

const action1 = addToCart({ id: 1, qty: 5 });
store.dispatch(action1);

store.dispatch(login());
