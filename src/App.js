import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Chat from './components/Chat';
import History from './components/History';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/" render={() => <Redirect to="/chat" />} />
      <Route path="/chat" component={Chat} />
      <Route exact path="/history" component={History} />
    </>
  );
}

export default App;
