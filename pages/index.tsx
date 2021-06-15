import Link from 'next/link';
import Card from '../components/Card/Card';
import { Container } from '../components/Container/Container';
import { useTheme } from '../context/ThemeContext';

const Index = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Card></Card>
    </Container>
  );
};

export default Index;
