import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
  margin: 0 auto;
  > label {
    padding-bottom: 1rem;
  }
  > input {
    height: 2rem;
  }
`;

const Input = ({ label, name, value, onChange }) => {
  return (
    <Container>
      <label for={name}>{label}</label>
      <input
        name={name}
        type='text'
        required
        autoComplete='off'
        value={value}
        onChange={e => onChange(e)}
      />
    </Container>
  );
};

export default Input;
