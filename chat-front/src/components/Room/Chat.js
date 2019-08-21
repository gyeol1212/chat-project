import React from 'react';
import styled from 'styled-components';

const Chat = ({ left, name, createdAt, children }) => {
  return (
    <Container left={left}>
      <div>{name}</div>
      <div>{children}</div>
      <div>{createdAt}</div>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  padding: 1rem;
  font-size: 1.3rem;
  max-width: 50%;
  margin-left: 1rem;
  margin-right: 1rem;
  align-self: ${props => (props.left ? 'flex-start' : 'flex-end')}
  > div:first-child {
    font-weight: bold;
    padding-bottom: 0.5rem;
    text-align: ${props => props.left || 'right'}
  }
  > div:last-child {
    text-align: ${props => props.left || 'right'}
    font-size: 1rem;
    padding-top: 0.4rem;
  }
`;
