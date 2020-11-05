import React from 'react';
import ReactDOM from 'react-dom';

// ROUTER
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// THEME
import { ThemeProvider } from '@material-ui/core';
import { theme } from './util/theme';

// GRAPHQL
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';

// COMPONENTS
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Error } from './pages/error/Error';

// MISC
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Switch>
            <Route path="/about"><About/></Route>
            <Route path="/"><Home/></Route>
            <Route><Error/></Route>
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
