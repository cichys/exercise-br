import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import config from './config/config';
import selectRepository from './graphql/resolvers/selectRepository';


const client = new ApolloClient({
    uri: config.api.url,
    clientState: {
        defaults: {
            selectedRepositoryIds: []
        },
        resolvers: {
            Mutation: {
                selectRepository,
            }
        }
    }
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
