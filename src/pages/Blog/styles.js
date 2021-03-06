import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  color: #004760;
  font-size: 2rem;
  text-align: center;
`;

export const TimeLine = styled.ul`
  @media only screen and (min-width: 576px) {
    li {
      display: flex;
      list-style-type: none;
      max-width: 1200px;
      margin: 40px auto;
      align-items: center;
      text-align: justify;

      div {
        width: 50%;
        margin: 0 30px;
      }

      span {
        font-size: 1.5rem;
        font-weight: lighter;
        font-family: 'Italliano';
      }

      h2 {
        font-family: 'Roboto';
        padding: 10px;
        font-size: 2.5rem;
        color: #004760;
      }

      p {
        font-size: 1.3rem;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin-top: auto;

    li {
      list-style-type: none;
      text-align: justify;
      margin: 60px 0;
    }
    span {
      font-size: 1.2rem;
      font-weight: lighter;
      font-family: 'Italliano';
    }

    h2 {
      font-family: 'Parisienne';
      padding: 8px;
      font-size: 2rem;
      color: #004760;
    }

    p {
      font-size: 1rem;
      line-height: 25px;
      margin-bottom: 15px;
    }

    div {
      width: 100%;
    }
  }
`;

export const BlogPost = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/v1591746182/Profile/download.jpg');
  height: 260px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;
