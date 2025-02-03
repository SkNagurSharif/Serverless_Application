import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-api-id.execute-api.region.amazonaws.com/dev/graphql', // Replace with your actual AWS GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
