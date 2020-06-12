import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        <h4>Início</h4>
      </Link>
      <Link to="/about" onClick={() => setOpen(!open)}>
        <h4>Sobre</h4>
      </Link>
      <Link to="/projects" onClick={() => setOpen(!open)}>
        <h4>Projetos</h4>
      </Link>
      {/*<Link to="/blog" onClick={() => setOpen(!open)}>
        <h4>Blog</h4>
      </Link>*/}
      <Link to="/contact" onClick={() => setOpen(!open)}>
        <h4>Contato</h4>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
