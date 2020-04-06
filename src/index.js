import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// import * as actions from "./actions";
import { Provider } from "react-redux";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// // const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
// ReactDOM.render(<App />, document.getElementById("root"));

// unsubscribe();
