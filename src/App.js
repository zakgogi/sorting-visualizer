import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SortingVisualizer } from './pages';


function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <SortingVisualizer />
        </Route>
      </Switch>
    </>
  );
}

export default App;