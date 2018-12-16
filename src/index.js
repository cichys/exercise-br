import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import config from './config/config';

const cache = new InMemoryCache({
    addTypename: false
});

const httpLink = new HttpLink({
    uri: config.api.url,
});

const client = new ApolloClient({
    link: httpLink,
    cache
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
