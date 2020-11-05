import { gql } from '@apollo/client';

export const UPDATE_WIZARD_STEPPER_MUTATION = gql`
  mutation UpdateWizardStepper($number: Number) {
    updateWizardStepper(stepperValue: $number) {
      wizard @client {
        stepper
      }
    }
  }
`;


// NOTE: We'll need state for user choices.
