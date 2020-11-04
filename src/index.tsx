import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './util/apolloClient';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
