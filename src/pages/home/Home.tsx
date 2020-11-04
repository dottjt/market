import React from 'react';
import { useQuery } from '@apollo/client';
import './Home.scss';

import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Wizard } from '../../components/wizard/Wizard';

import { INITIAL_HOME_STATE } from '../../graphql/queries/localQueries';

export function Home() {
  const { loading, error, data } = useQuery(INITIAL_HOME_STATE);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <div className="Home">
      <Header/>
      <Wizard/>
      <Footer/>
    </div>
  );
}
