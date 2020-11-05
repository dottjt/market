import { ApolloClient } from '@apollo/client';

import { cache } from './apolloCache';
import {
  Query,
  Wizard,
  Mutation,
} from './apolloTypeDefs';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
  typeDefs: [
    Query,
    Wizard,
    Mutation,
  ]
});
