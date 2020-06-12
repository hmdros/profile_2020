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

export const ProjectGrid = styled.div`
  text-align: center;

  i {
    width: 300px;
    height: 300px;
    object-fit: contain;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    overflow: hidden;
  }
`;
