import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Button/Button';
import { FiMoon, FiSun } from 'react-icons/fi';

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.theme === 'light' ? `var(--global-white);` : `var(--global-grey);`)};
  color: ${(props) => (props.theme === 'light' ? `var(--global-black);` : `var(--global-white);`)};
  border-bottom: ${(props) => props.theme === 'light' && `1px solid var(--global-light-grey);`};
`;

interface Props {}

const Navbar = (props: Props) => {
  const { theme, changeTheme } = useTheme();

  return (
    <NavbarContainer theme={theme}>
      <p>Styled Components Practice</p>
      <Button onClick={() => changeTheme()} theme={theme}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </Button>
    </NavbarContainer>
  );
};

export { Navbar };
