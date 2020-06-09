import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  h2 {
    font-family: 'Parisienne';
    color: #004760;
    font-size: 3rem;
  }
`;
export const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  color: #004760;
  font-size: 2rem;
  text-align: center;
`;
export const BestmanList = styled.ul`
  li {
    display: flex;
    list-style-type: none;
    max-width: 1200px;
    margin: 40px auto;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
    }
  }
`;

export const BrideMade = styled.ul`
  li {
    display: flex;
    list-style-type: none;
    max-width: 550px;
    margin: 40px auto;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h3 {
      font-family: 'Parisienne';
      color: #004760;
      font-size: 2rem;
      margin-left: 15px;
    }
  }

  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 576px) {
    li {
      flex-wrap: wrap;
    }

    img {
      width: 350px;
      height: 350px;
      object-fit: contain;
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  text-align: justify;

  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    margin: 10px;
  }

  img {
    background: linear-gradient(
      180deg,
      rgba(244, 244, 244, 0) 34%,
      #f4f4f4 100%
    );
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: 408px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/v1557583825/perfillw-removebg.png'), linear-gradient(-180deg, rgba(244,244,244,0) 34%, #f4f4f4 100%);
`;
