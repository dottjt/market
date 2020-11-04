import { ApolloClient } from '@apollo/client';

import { cache } from './apolloCache';
import {
  Query,
  Wizard,
  Mutation,
} from './apolloTypeDefs';

export const apolloClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
  typeDefs: [
    Query,
    Wizard,
    Mutation,
  ]
});
