import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Room from './containers/Room';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/room' component={Room} />
      </Switch>
    </>
  );
}

export default App;
