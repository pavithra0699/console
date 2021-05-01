import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './assets/css/index.css';
import App from './App';

import rootReducer from './redux/reducers/index';
import { fetchGenres } from './redux/actions';

const initialState = {
  movies: {
    page: 1, total_results: 100, total_pages: 500, searchBy: 'Popularity', results: [],
  },
  selectedMovie: {},
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
  ],
  filter: 'All',
  status: { isLoading: false, errors: [] },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(fetchGenres());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
