import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100vh;
  max-height: 100vh;
  background-color: ${(props) => (props.theme === 'light' ? `var(--global-white);` : `var(--global-dark-grey);`)};
  color: ${(props) => (props.theme === 'light' ? `var(--global-black);` : `var(--global-white);`)};
  padding: 10px 20px;
`;

export { Container };
