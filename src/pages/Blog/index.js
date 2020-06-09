import React from 'react';
import { Container, TimeLine, BlogPost, Header } from './styles';

export default function Blog() {
  return (
    <Container>
      <Header>
        <h1>Blog</h1>
      </Header>
      <TimeLine>
        <li data-aos="fade-in">
          <div>
            <span>Data</span>
            <h2>Post I</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é
              um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé
              sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
              A ordem dos tratores não altera o pão duris.
            </p>
          </div>
          <BlogPost />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>Data</span>
            <h2>Post II</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é
              um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé
              sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
              A ordem dos tratores não altera o pão duris.
            </p>
          </div>
          <BlogPost />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>Data</span>
            <h2>Post III</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é
              um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé
              sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
              A ordem dos tratores não altera o pão duris.
            </p>
          </div>
          <BlogPost />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>Data</span>
            <h2>Post IV</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é
              um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé
              sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
              A ordem dos tratores não altera o pão duris.
            </p>
          </div>
          <BlogPost />
        </li>
      </TimeLine>
    </Container>
  );
}
