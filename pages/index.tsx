import type { NextPage } from 'next';

import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      HELLO WORLD
      <MyButton>HELOO</MyButton>
    </Container>
  );
};

const Container = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 32px;
  color: tomato;
`;

const MyButton = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 32px;
  padding: 8px;
`;

export default Home;
