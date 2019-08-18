import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../components/Home/HomeContainer';

import useInputs from '../hooks/useInputs';

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  const [user, onChange] = useInputs({
    name: '',
    room: '',
  });

  return (
    <Container>
      <div>Hello</div>
      <HomeContainer user={user} onChange={e => onChange(e)} />
    </Container>
  );
};

export default Home;
