import React from 'react';
import { gql, useMutation } from '@apollo/client';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

// import { UPDATE_WIZARD_STEPPER_MUTATION } from '../../graphql/mutations/localMutations';

import { WizardMultipleChoice } from './questions/WizardMultipleChoice'
// import { WizardYesNo } from './questions/WizardYesNo'

import {
  Question,
  QuestionType,
  MultipleChoiceQuestion,
} from '../../types/types';

const selectCorrectWizardItem = ({ question }: { question: Question }) => {
  switch(question.questionType) {
    case QuestionType.MultipleChoice: return <WizardMultipleChoice question={question as MultipleChoiceQuestion} />
    // case QuestionType.YesNo: return <WizardYesNo question={question as YesNoQuestion} />
  }
}

export function Wizard() {

  // const [updateWizardStepper, { data }] = useMutation(UPDATE_WIZARD_STEPPER_MUTATION, {
  //   update(cache, { data: { stepper } }) {
  //     cache.modify({
  //       fields: {
  //         comments(existingCommentRefs = [], { readField }) {
  //           const newCommentRef = cache.writeFragment({
  //             data: stepper,
  //             fragment: gql`
  //               fragment NewComment on Comment {
  //                 id
  //                 text
  //               }
  //             `
  //           });
  //           return [...existingCommentRefs, newCommentRef];
  //         }
  //       }
  //     });
  //   }
  // });

  return (
    <div className="Wizard">
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {data.steps.map((step: Step) => selectCorrectWizardItem(step))}
        </Grid>

        <Button onClick={() => updateWizardStepper(data.wizard.stepper + 1)}>
          Next Step
        </Button>
      </Container>

    </div>
  )
}