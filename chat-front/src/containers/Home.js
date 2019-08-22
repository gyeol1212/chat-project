import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { HomeContainer } from '../components/Home';

import useInputs from '../hooks/useInputs';
import { UserInfoContext } from '../contexts/userInfo';
import { ChatContext } from '../contexts/chat';

const Home = props => {
  const [user, onChange] = useInputs({
    name: '',
    room: '',
  });

  const userInfo = useContext(UserInfoContext);
  const chat = useContext(ChatContext);

  useEffect(() => {
    if (userInfo.state.username) {
      onChange({ name: 'name', value: userInfo.state.username });
    }
    if (userInfo.state.room) {
      onChange({ name: 'room', value: userInfo.state.room });
    }
  }, [userInfo]);

  const joinRoom = () => {
    if (!user.name || !user.room) return alert('이름과 방은 필수입니다!');
    userInfo.action.setUsername(user.name);
    userInfo.action.setRoom(user.room);
    chat.action.connectSocket(user);
    props.history.push('/room');
  };

  return (
    <Container>
      <HomeContainer user={user} onChange={e => onChange(e)} joinRoom={joinRoom} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
`;
