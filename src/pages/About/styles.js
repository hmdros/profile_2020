import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin-bottom: 50px;
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

export const Body = styled.div`
  p {
    font-family: 'Roboto';
    font-size: 1.5rem;
    margin: 10px;
  }

  h1 {
    margin: 20px 0;
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
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/v1557583825/perfillw-removebg.png'),
    linear-gradient(180deg, rgba(244, 244, 244, 0) 34%, #f4f4f4 100%);
`;

export const SkillsGrid = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 4fr);
  grid-gap: 30px;

  @media (max-width: 567px) {
    grid-template-columns: repeat(2, 2fr);
  }

  i {
    font-size: 70px;
    padding: 20px;
    border: 2px solid #eee;
    border-radius: 15px;
    background-color: #ddd;
  }

  i:hover {
    background-color: #aaa;
  }
`;
export const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);

  @media (max-width: 567px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
