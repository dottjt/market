import { gql } from '@apollo/client';

const UPDATE_WIZARD_STEPPER = gql`
  mutation UpdateWizardStepper($number: Number) {
    updateWizardStepper(stepperValue: $number) {
      wizard {
        stepper
      }
    }
  }
`;


// NOTE: We'll need state for user choices.
