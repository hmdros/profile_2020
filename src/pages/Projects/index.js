import React from 'react';

import { Container, Header, ProjectGrid } from './styles';

export default function Projects() {
  return (
    <Container>
      <Header>
        <h1>Projetos</h1>
      </Header>
      <ProjectGrid>
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria um"
        />
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria quatro"
        />
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria cinco"
        />
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria um"
        />
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria quatro"
        />
        <img
          data-aos="fade-in"
          src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg"
          alt="galeria cinco"
        />
      </ProjectGrid>
    </Container>
  );
}

// https://tympanus.net/Development/SmoothScrollingImageEffects/ - para galeria
