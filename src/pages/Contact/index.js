import React from 'react';

import { Container, Header, Body } from './styles';

export default function Contact() {
  return (
    <Container>
      <Header>
        <h1>Obrigado pela visita!</h1>
      </Header>
      <Body>
        <h4>Para entrar em contato use o <a href="mailto:hmdros@gmail.com">e-mail.</a></h4>
        <h1>Redes Sociais</h1>
        <h3><a href="https://www.linkedin.com/in/hmdros">Linkedin</a></h3>
        <h3><a href="https://github.com/hmdros">GitHub</a></h3>

      </Body>
    </Container>
  );
}
