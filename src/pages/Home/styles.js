import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  justify-content: center;
  align-items: center;
  background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/c_scale,q_75,w_1920/v1591740463/Profile/background2.jpg'), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4));
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 576px) {
    background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/c_scale,q_75,w_700/v1591740463/Profile/background2.jpg'), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4));
  }

  h1 {
    font-size: 120px;
    font-weight: bold;
    color: #42E2B8;

    @media (max-width: 576px) {
      font-size: 68px;
      text-align: center;
    }
  }

  h2 {
    color: #fff;
    font-size: 68px;
  }
`;
