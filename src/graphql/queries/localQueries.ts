import { gql } from '@apollo/client';

const INITIAL_HOME = gql`
  query GetInitialHome {
    wizard {
      step
    }
  }
`;
