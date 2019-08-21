import React, { useState, useEffect, useContext } from 'react';

import { RoomContainer } from '../components/Room';
import useInputs from '../hooks/useInputs';
import { UserInfoContext } from '../contexts/userInfo';

const Room = props => {
  const [message, onChange] = useInputs({ message: '' });

  const userInfo = useContext(UserInfoContext);

  const [messages, setMessages] = useState([
    {
      username: '겨리',
      message: '안녕하세요오오오오',
      createdAt: '2019-08-20',
    },
    {
      username: '뉴리',
      message: '안녕하세요오오오오!!!',
      createdAt: '2019-08-20',
    },
    {
      username: '겨리',
      message: '안녕하세요오오오오',
      createdAt: '2019-08-20',
    },
    {
      username: '뉴리',
      message: '안녕하세요오오오오!!!',
      createdAt: '2019-08-20',
    },
    {
      username: '겨리',
      message: '안녕하세요오오오오',
      createdAt: '2019-08-20',
    },
    {
      username: '뉴리',
      message: '안녕하세요오오오오!!!',
      createdAt: '2019-08-20',
    },
    {
      username: '겨리',
      message: '안녕하세요오오오오',
      createdAt: '2019-08-20',
    },
    {
      username: '뉴리',
      message: '안녕하세요오오오오!!!',
      createdAt: '2019-08-20',
    },
  ]);

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        username: userInfo.state.username,
        message: message.message,
        createdAt: '2019-08-21',
      },
    ]);
    onChange({ target: { name: 'message', value: '' } });
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <RoomContainer
        messages={messages}
        message={message}
        onChange={onChange}
        sendMessage={sendMessage}
        myname={userInfo.state.username}
        goBack={goBack}
        userInfo={userInfo.state}
      />
    </>
  );
};

export default Room;
