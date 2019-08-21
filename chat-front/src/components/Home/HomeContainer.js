import React from 'react';
import styled from 'styled-components';

import Input from './Input';

const HomeContainer = ({ user, onChange, joinRoom }) => {
  return (
    <Container>
      <p>TITLE</p>
      <Input label='이름' name='name' value={user.name} onChange={e => onChange(e)} />
      <Input label='방' name='room' value={user.room} onChange={e => onChange(e)} />
      <button onClick={joinRoom}>입장</button>
    </Container>
  );
};

export default HomeContainer;

const Container = styled.div`
  border: 1px solid black;
  width: 30%;
  padding-bottom: 6rem;
  margin: 15rem auto;
  > p {
    font-size: 2rem;
    margin: 3rem;
    text-align: center;
  }
  > button {
    display: block;
    margin: 2rem auto 1rem;
    border: 1px solid black;
    font-size: 1.5rem;
    padding: 1rem 4rem;
    border-radius: 5rem;
    cursor: pointer;
    outline: none;
  }
`;
