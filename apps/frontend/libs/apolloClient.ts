import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const adminLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_ADMIN_GRAPHQL_ENDPOINT });
const clientLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_CLIENT_GRAPHQL_ENDPOINT });

const link = ApolloLink.split(
  (operation) => operation.getContext().targetApi === 'admin',
  adminLink,
  clientLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;