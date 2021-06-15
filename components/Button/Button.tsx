import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 8px 10px;
  border-radius: 4px;

  background-color: ${(props) => (props.theme === 'light' ? `var(--global-white);` : `var(--global-dark-grey);`)};
  border: 1px solid ${(props) => (props.theme === 'light' ? `var(--global-light-grey);` : `var(--global-grey);`)};
  color: ${(props) => (props.theme === 'light' ? `var(--global-black);` : `var(--global-white);`)};

  &:hover {
    border: 1px solid ${(props) => (props.theme === 'light' ? `var(--global-black);` : `var(--global-light-grey);`)};
  }
`;

export default Button;
