import React from 'react';

import { Container, Header, Body, Profile, SkillsGrid, CompaniesGrid } from './styles';

export default function About() {
  return (
    <Container>
      <Header>
        <h1>Oi eu sou Henrique Medeiros</h1>
        <h6>Desenvolvedor FullStack, desenvolvo projetos que entregam experiencias unicas para as
           pessoas.
        </h6>
      </Header>
      <Body>
        <Profile />
        <h1>Skills</h1>
        <SkillsGrid>
          <i className="devicon-ruby-plain-wordmark colored" />
          <i className="devicon-rails-plain-wordmark colored" />
          <i className="devicon-nodejs-plain-wordmark colored" />
          <i className="devicon-react-original colored" />
          <i className="devicon-bootstrap-plain-wordmark colored" />
          <i className="devicon-html5-plain-wordmark colored" />
          <i className="devicon-css3-plain-wordmark colored" />
          <i className="devicon-github-plain-wordmark colored" />
        </SkillsGrid>
        <h1>Experiencias anteriores</h1>
        <CompaniesGrid>
          <h3><a href="https://www.temporadalivre.com/" target="_blank">Temporada Livre</a></h3>
          <h3><a href="https://www.zimobi.com.br/" target="_blank">Zimobi</a></h3>
          <h3><a href="http://conesolucoes.com.br/" target="_blank">Cone Solucoes</a></h3>
          <h3><a href="http://www.bossaturismo.com/" target="_blank">Bossa Turismo</a></h3>
        </CompaniesGrid>
      </Body>
    </Container>
  );
}
