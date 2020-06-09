import React from 'react';

import { Container, Header, Body, Profile } from './styles';

export default function About() {
  return (
    <Container>
      <Header>
        <h1>Quem e Henrique Medeiros</h1>
      </Header>
      <Body>
        <div>
          <p>
            Sou apaixonado pelo desenvolvimento de software de computador,
            procurando sempre soluções eficientes para os problemas dos usuarios.
          </p>
          <p>Engenheiro ambiental de formacao, me tornei desenvolvedor
            buscando agregar mais em meu dia-a-dia, pois sabia que poderia
            desenvolver e entregar atividades que poderiam ajudar as pessoas
            em suas necessidades.
          </p>
          <p>
            Sempre busco aprender e agregar mais conhecimento ao meu trabalho e
            acredito que nos torne melhor!
          </p>
        </div>
        <Profile />
      </Body>
      <div>
        <h1>Skills</h1>
        <p>Ruby on Rails</p>
        <p>NodeJS</p>
        <p>ReactJS</p>
        <p>React Native</p>
        <p>RestFull API`s</p>
      </div>
      <div>
        <h1>Experiencias</h1>
        <div>
          <h4>Temporada Livre</h4>
          <h4>Zimobi</h4>
          <h4>Cone Solucoes</h4>
          <h4>Bossa Turismo</h4>
        </div>
      </div>
    </Container>
  );
}
