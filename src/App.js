import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SortingVisualizer, Home } from './pages';
import { Header } from './layout';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/visualizer">
          <SortingVisualizer />
        </Route>
      </Switch>
    </>
  );
}

export default App;