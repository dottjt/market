import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import { MultipleChoiceQuestion } from '../../../types/types';

import { UPDATE_WIZARD_MULTIPLE_CHOICE_MUTATION } from '../../../graphql/mutations/localMutations';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export function WizardMultipleChoice({ question }: { question: MultipleChoiceQuestion }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper variant="outlined" className={classes.paper}>

      </Paper>
    </Grid>
  )
}

