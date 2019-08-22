import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Chat from './Chat';

const RoomContainer = ({ messages, message, onChange, sendMessage, myname, goBack, userInfo }) => {
  const chatScreenEl = useRef(null);

  useEffect(() => {
    console.log(chatScreenEl);
    chatScreenEl.current.scrollTop =
      chatScreenEl.current.scrollHeight - chatScreenEl.current.offsetHeight;
  }, [messages]);

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  return (
    <Container>
      <div>
        <div>{userInfo.room}</div>
        <p> 참여자 1</p>
        <p> 참여자 2</p>
        <p> 참여자 3</p>
        <button onClick={goBack}>나가기</button>
      </div>
      <div>
        <div ref={chatScreenEl}>
          {messages.map(({ message, username, createdAt }, key) => (
            <Chat key={key} name={username} createdAt={createdAt} left={username !== myname}>
              {message}
            </Chat>
          ))}
        </div>
        <div>
          <input
            name='message'
            type='text'
            required
            autoComplete='off'
            value={message.message}
            onChange={e => onChange(e)}
            onKeyDown={e => handleKeyPress(e)}
          />
          <button onClick={sendMessage}>전송</button>
        </div>
      </div>
    </Container>
  );
};

export default RoomContainer;

const Container = styled.div`
  border: 1px solid black;
  width: 80%;
  /* padding-bottom: 6rem; */
  margin: 15rem auto;
  display: flex;
  height: 50rem;
  > div:first-child {
    font-size: 2rem;
    width: 20%;
    box-sizing: border-box;
    border-right: 2px dotted gray;
    display: flex;
    flex-direction: column;
    > div {
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid black;
      box-sizing: border-box;
      padding: 2rem;
      margin-bottom: 2rem;
    }
    > p {
      font-size: 1.5rem;
      text-align: center;
      margin: 0.5rem;
    }
    > button {
      display: block;
      margin: auto auto 2rem;
      border: 1px solid black;
      font-size: 1.5rem;
      padding: 1rem 4rem;
      border-radius: 5rem;
      cursor: pointer;
      outline: none;
    }
  }
  > div:last-child {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 80%;
    > div:first-child {
      overflow: scroll;
      height: 90%;
      border-bottom: 1px solid black;
      display: flex;
      flex-direction: column;
    }
    > div:last-child {
      display: flex;
      height: 10%;
      > input {
        width: 90%;
        display: block;
        height: 50%;
        margin: auto 0 auto 1rem;
      }
      > button {
        display: block;
        min-width: 10%;
        margin: auto 1rem;
        border: 1px solid black;
        font-size: 1.5rem;
        padding: 0.5rem 1.5rem;
        border-radius: 5rem;
        cursor: pointer;
        outline: none;
      }
    }
  }
`;
