import React from 'react';
import { useMutation } from '@apollo/client';

import { UPDATE_WIZARD_STEPPER } from '../../graphql/mutations/localMutations';

export function Wizard() {

  const [updateWizardStepper, { data }] = useMutation(UPDATE_WIZARD_STEPPER);

  return (
    <div className="Wizard">
      <div></div>

      <div>Next Step</div>
      <div>Previous Step</div>
    </div>
  )
}
