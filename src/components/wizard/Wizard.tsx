import React from 'react';
import { gql, useMutation } from '@apollo/client';

import { UPDATE_WIZARD_STEPPER_MUTATION } from '../../graphql/mutations/localMutations';
import { Button } from '../button/Button';

export function Wizard() {

  const [updateWizardStepper, { data }] = useMutation(UPDATE_WIZARD_STEPPER_MUTATION, {
    update(cache, { data: { stepper } }) {
      cache.modify({
        fields: {
          comments(existingCommentRefs = [], { readField }) {
            const newCommentRef = cache.writeFragment({
              data: stepper,
              fragment: gql`
                fragment NewComment on Comment {
                  id
                  text
                }
              `
            });
            return [...existingCommentRefs, newCommentRef];
          }
        }
      });
    }
  });

  return (
    <div className="Wizard">
      <div></div>

      <Button onClick={() => updateWizardStepper(data.wizard.stepper + 1)}>
        Next Step
      </Button>
      {/* <Button onClick={() => updateWizardStepper(data.wizard.stepper - 1)}>
        Previous Step
      </Button> */}
    </div>
  )
}
