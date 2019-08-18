import React from 'react';
import styled from 'styled-components';

import Input from './Input';

const Container = styled.div`
  border: 1px solid black;
  width: 50%;
  padding-bottom: 6rem;
  margin: auto;
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

const HomeContainer = ({ user, onChange }) => {
  return (
    <Container>
      <p>TITLE</p>
      <Input label='이름' name='name' value={user.name} onChange={e => onChange(e)} />
      <Input label='방' name='room' value={user.room} onChange={e => onChange(e)} />
      <button>입장</button>
    </Container>
  );
};

export default HomeContainer;
