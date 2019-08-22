import React, { useState, createContext } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const ChatContext = createContext();

const { Provider } = ChatContext;

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(initialMessages);

  const connectSocket = ({ name, room }) => {
    socket.emit('join', { name, room });

    socket.on('message', message => {
      const updatedMessages = [...messages, message];
      console.log(updatedMessages);
      setMessages(updatedMessages);
      console.log(message);
    });
  };

  const sendMessage = ({ message, error }) => {
    console.log(message);
    socket.emit('sendMessage', message, error => {
      setMessages([...messages, message]);
      console.log('sendMessage');
    });
  };

  const state = { messages };

  const action = {
    setMessages: e => setMessages(e),
    connectSocket: params => connectSocket(params),
    sendMessage: parmas => sendMessage(parmas),
  };

  return <Provider value={{ state, action }}>{children}</Provider>;
};

export { ChatContext, ChatProvider };

const initialMessages = [
  {
    username: '겨리',
    message: '안녕하세요오오오오',
    createdAt: 1566470689065,
  },
  {
    username: '뉴리',
    message: '안녕하세요오오오오!!!',
    createdAt: 1566470689065,
  },
  {
    username: '겨리',
    message: '안녕하세요오오오오',
    createdAt: 1566470689065,
  },
  {
    username: '뉴리',
    message: '안녕하세요오오오오!!!',
    createdAt: 1566470689065,
  },
  {
    username: '겨리',
    message: '안녕하세요오오오오',
    createdAt: 1566470689065,
  },
  {
    username: '뉴리',
    message: '안녕하세요오오오오!!!',
    createdAt: 1566470689065,
  },
  {
    username: '겨리',
    message: '안녕하세요오오오오',
    createdAt: 1566470689065,
  },
  {
    username: '뉴리',
    message: '안녕하세요오오오오!!!',
    createdAt: 1566470689065,
  },
];
