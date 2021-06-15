import styled from 'styled-components';
import Image from 'next/image';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  border: 1px solid var(--global-light-grey);
  overflow: hidden;
  transition: box-shadow 0.8s;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }
`;

const CardHeader = styled.div``;

const CardContent = styled.div`
  padding: 20px;
  p {
    margin-top: 10px;
  }
`;

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Image src='/tokyo.jpg' layout='fixed' width='300' height='150' />
      </CardHeader>
      <CardContent>
        <h1>Tokyo Skyline</h1>
        <p>The Tokyo skyline is one of the most famous in the world, and for good reason.</p>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
