import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";
  

const client = new ApolloClient({
    uri: 'https://known-iguana-22.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : '4cEys4IYGeMsJYVcJvv8krgD66mUkiKC5RuJOtWt650uP8e31i2O7X0XZ6bqU9aX'
    }
  });

  export default client