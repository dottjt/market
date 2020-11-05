import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export function Error() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <ErrorMain classes={classes}/>

      <Footer />
    </React.Fragment>
  );
}

type ErrorMainProps = {
  classes: any;
}

function ErrorMain({ classes }: ErrorMainProps) {
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Error
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Sorry, but there appears to be an error!
      </Typography>
    </Container>
  )
}

