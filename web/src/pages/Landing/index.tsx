import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

import { PageLanding, ContentWrapper } from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <Link to="app">
          <FiArrowRight size={20} color="rgba(0,0,0,0.6)" />
        </Link>
      </ContentWrapper>
    </PageLanding>
  );
};

export default Landing;
