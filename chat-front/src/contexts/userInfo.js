import React, { useState, createContext } from 'react';

const UserInfoContext = createContext();

const { Provider } = UserInfoContext;

const UserInfoProvider = ({ children }) => {
  const [username, setUsername] = useState('default');
  const [room, setRoom] = useState('1');

  const state = { username, room };

  const action = {
    setUsername: e => setUsername(e),
    setRoom: e => setRoom(e),
  };

  return <Provider value={{ state, action }}>{children}</Provider>;
};

export { UserInfoContext, UserInfoProvider };
