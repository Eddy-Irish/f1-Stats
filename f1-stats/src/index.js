import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Realm from 'realm-web';
import { ApolloClient,
         ApolloProvider,
         HttpLink,
         InMemoryCache } from '@apollo/client';


export const APP_ID = "f1-stats-mongo-realm-fkrpb";
const graphqlUri = `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/f1-stats-mongo-realm-fkrpb/graphql`

// Connect to MongoDB Realm App
const app = new Realm.App(APP_ID);

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there is a logged in user with a valid access token
  if (!app.currentUser) {
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access toekn might be stale, to guarantee that the token
    // is valid, refresh the user's custom data which also refreshes the access token
    await app.currentUser.refreshCustomData();
  }
  return app.currentUser.accessToken
}

// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    // Define a custom fetch handler for ApolloClient that authenticate GraphQL requests
    // Function intercepts every Apollo HTTP request and adds an Authorization header with a
    // valid access token before sending the request
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
