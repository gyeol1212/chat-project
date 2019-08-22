import React, { useState, useContext } from 'react';

import { RoomContainer } from '../components/Room';
import useInputs from '../hooks/useInputs';
import { UserInfoContext } from '../contexts/userInfo';
import { ChatContext } from '../contexts/chat';

const Room = props => {
  const [message, onChange] = useInputs({ message: '' });

  const userInfo = useContext(UserInfoContext);
  const chat = useContext(ChatContext);

  const sendMessage = () => {
    // chat.action.setMessages([
    //   ...chat.state.messages,
    //   {
    //     username: userInfo.state.username,
    //     message: message.message,
    //     createdAt: '2019-08-21',
    //   },
    // ]);
    chat.action.sendMessage({
      message: {
        username: userInfo.state.username,
        message: message.message,
        createdAt: 1566470689065,
      },
    });
    onChange({ target: { name: 'message', value: '' } });
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <RoomContainer
        messages={chat.state.messages}
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
