import React from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from './main/main_page';

import "../scss/style.scss";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;