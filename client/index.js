import React from "react";
import ReactDOM from "react-dom";//
import {render} from "react-dom";//render acts as an object inside react-dom
import {Provider} from "react-redux";
//import routes from "./routes.js";
import Home from './Home.js';
import {applyMiddleware,  createStore, combineReducers} from "redux";

const rootReducer = combineReducers({  });
const store = createStore(rootReducer);//createStore default-->reducers and optional as middleware

class App extends React.Component {
render() {
return (
<Provider store={store}> //you need it for creation of nested components and it makes store value accessible to all components.
<Home />
</Provider>);
}
};

render(
<App />, document.getElementById("container")
);
