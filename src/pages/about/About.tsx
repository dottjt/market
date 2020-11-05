import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Wizard } from '../../components/wizard/Wizard';

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

export function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <AboutHero classes={classes}/>
      <Wizard />

      <Footer />
    </React.Fragment>
  );
}

type AboutHeroProps = {
  classes: any;
}

function AboutHero({ classes }: AboutHeroProps) {
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Makeup
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Select your preferences
      </Typography>
    </Container>
  )
}
