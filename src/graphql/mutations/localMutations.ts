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


export const UPDATE_WIZARD_MULTIPLE_CHOICE_MUTATION = gql`
  mutation UpdateWizardMultipleChoice($number: Number) {
    updateWizardMultipleChoice(stepperValue: $number) {
      wizard @client {
        stepper
      }
    }
  }
`;

export const UPDATE_WIZARD_YES_NO_MUTATION = gql`
  mutation UpdateWizardYesNo($number: Number) {
    updateWizardYesNo(stepperValue: $number) {
      wizard @client {
        stepper
      }
    }
  }
`;


// NOTE: We'll need state for user choices.
