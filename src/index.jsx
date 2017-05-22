const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const thunk = require('redux-thunk').default;
const Provider = require('react-redux').Provider;

let App = require('./containers/App.jsx');
let AppReducer = require('./reducers/AppReducer');

let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;


let store = createStore(AppReducer,applyMiddleware(thunk));
let fetchNews = require('./actions/AppActions').fetchNews;
store.dispatch(fetchNews());


const container = document.getElementById('page-wrapper');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,container);