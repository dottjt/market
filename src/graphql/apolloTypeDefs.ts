import { gql } from '@apollo/client';

export const Query = gql`
  extend type Query {
    wizard: Wizard
  }
`;

export const Wizard = gql`
  extend type Wizard {
    stepper: Number!
    choices: [Choice]
  }

  extend type Choice {
    value: string!
    category: ChoiceCategory!
  }

  extend type ChoiceCategory {
    value: String!
  }
`;

export const Mutation = gql`
  extend type Mutation {
    updateWizardStepper(number: Number!): Wizard
  }
`;
